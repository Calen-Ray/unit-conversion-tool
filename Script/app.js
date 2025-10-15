/**
 * unitConfig acts as the single source of truth for available conversion categories.
 * - Scalar-based categories (length, volume, mass, storage) describe one "base" unit
 *   and map each supported unit to its multiplier relative to that base.
 * - Temperature relies on bespoke toBase/fromBase functions because temperature scales
 *   are affine transformations rather than simple ratios.
 *
 * Adding a new category only requires appending an entry here; the UI listens for this
 * configuration and populates dropdown options dynamically.
 */
const unitConfig = {
    length: {
        base: "meter",
        label: "Length",
        units: {
            kilometer: 1000,
            meter: 1,
            centimeter: 0.01,
            millimeter: 0.001,
            nanometer: 0.000000001,
            inch: 0.0254,
            foot: 0.3048,
            yard: 0.9144,
            mile: 1609.344,
            lightyear: 9.461e+15,
            cubit: 0.4572,
            'danny deVito': 1.47,
            'tantive IV': 126,
            'imperial-class Star Destroyer': 1600,
            'football Field': 109.728,
            'dominos Large Pizza': 0.3556
        }
    },
    volume: {
        base: "liter",
        label: "Volume",
        units: {
            liter: 1,
            milliliter: 0.001,
            gallon: 3.78541,
            quart: 0.946353,
            pint: 0.473176,
            cup: 0.24,
            ounce: 0.0295735,
            'noggin/Gill': 0.25 * 0.473176,
            'dominos Large Pizza': 0.88
        }
    },
    mass: {
        base: "kilogram",
        label: "Mass",
        units: {
            tonne: 1000,
            kilogram: 1,
            gram: 0.001,
            milligram: 0.000001,
            pound: 0.453592,
            ounce: 0.0283495,
            stevenHawking: 158.7572,
            zuko: 6.80389,
            transistor: 0.0000000000001766,
            cookie: 5.120923,
            felix: 6.644301,
            stone: 0.157473,
            'Vogue Magazine - February, 2003 ': 0.358,
            'average Newborn Elephant Calf': 90,
            'danny Devito': 88,
            'tantive IV': 105000,
            'imperial-class Star Destroyer': 40000000000,
            'dominos Large Pizza': 1.6
        }
    },
    storage: {
        base: "byte",
        label: "Digital Storage",
        units: {
            bit: 1 / 8,
            byte: 1,
            kilobyte: 1024,
            megabyte: 1024 ** 2,
            gigabyte: 1024 ** 3,
            terabyte: 1024 ** 4,
            petabyte: 1024 ** 5
        }
    },
    temperature: {
        label: "Temperature",
        units: {
            celsius: {
                toBase: value => value,
                fromBase: value => value
            },
            fahrenheit: {
                toBase: value => (value - 32) * (5 / 9),
                fromBase: value => value * (9 / 5) + 32
            },
            kelvin: {
                toBase: value => value - 273.15,
                fromBase: value => value + 273.15
            }
        }
    },
    money: {
        base: "dollar",
        label: "Money",
        units: {
            dollar: 1,
            'half dollar': 0.5,
            quarter: 0.25,
            dime: 0.1,
            nickel: 0.05,
            penny: 0.01,
            'dominos large any topping deal': 9.99,
            'average cost of u.s. childbirth': 18865
        }
    }
};

const categorySelect = document.getElementById("category");
const fromUnitSelect = document.getElementById("from-unit");
const toUnitSelect = document.getElementById("to-unit");
const inputValue = document.getElementById("input-value");
const resultOutput = document.getElementById("conversion-result");
const form = document.getElementById("conversion-form");
const resetButton = document.getElementById("reset-button");

/**
 * populateUnits synchronises the "From" and "To" dropdowns with the chosen category.
 * We rebuild the option lists every time the user switches categories to ensure the
 * selections remain valid and avoid stale unit choices.
 */
function populateUnits(category) {
    const config = unitConfig[category];
    if (!config) {
        fromUnitSelect.innerHTML = "";
        toUnitSelect.innerHTML = "";
        return;
    }

    const units = Object.keys(config.units);

    fromUnitSelect.innerHTML = units
        .map(key => `<option value="${key}">${formatUnitLabel(key)}</option>`)
        .join("");

    toUnitSelect.innerHTML = units
        .map(key => `<option value="${key}" ${key === units[1] ? "selected" : ""}>${formatUnitLabel(key)}</option>`)
        .join("");
}

function formatUnitLabel(key) {
    return key
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/_/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * convert handles the numerical transformation between two units.
 * For scalar categories we convert to the canonical base unit then back out to the target.
 * Temperature is handled separately because it is not proportional; each unit provides its
 * own toBase/fromBase helpers to keep the conversion path explicit and testable.
 */
function convert(category, value, from, to) {
    if (!Number.isFinite(value)) {
        return NaN;
    }

    if (category === "temperature") {
        const { units } = unitConfig.temperature;
        const toBase = units[from]?.toBase;
        const fromBase = units[to]?.fromBase;

        if (!toBase || !fromBase) {
            return NaN;
        }

        return fromBase(toBase(value));
    }

    const { units } = unitConfig[category] || {};
    const fromFactor = units?.[from];
    const toFactor = units?.[to];

    if (!fromFactor || !toFactor) {
        return NaN;
    }

    const valueInBase = value * fromFactor;
    return valueInBase / toFactor;
}

/**
 * handleSubmit owns form submission. It validates the incoming number, delegates to convert,
 * then formats the result using locale-aware formatting so users see familiar commas/decimals.
 */
function handleSubmit(event) {
    event.preventDefault();
    const category = categorySelect.value;
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const rawValue = Number.parseFloat(inputValue.value);

    if (!Number.isFinite(rawValue)) {
        resultOutput.textContent = "Please enter a valid number.";
        return;
    }

    const converted = convert(category, rawValue, fromUnit, toUnit);
    if (!Number.isFinite(converted)) {
        resultOutput.textContent = "Conversion unavailable for the selected units.";
        return;
    }

    const formatted = converted.toLocaleString(undefined, {
        maximumFractionDigits: 6
    });

    resultOutput.textContent = `${rawValue} ${formatUnitLabel(fromUnit)} = ${formatted} ${formatUnitLabel(toUnit)}`;
}

/**
 * handleReset clears the form, repopulates the unit dropdowns to their default state,
 * and returns focus to the value input so keyboard users can resume data entry immediately.
 */
function handleReset() {
    form.reset();
    populateUnits(categorySelect.value);
    resultOutput.textContent = "Enter a value above to see the conversion.";
    inputValue.focus();
}

/**
 * initialize wires up all event listeners and ensures the UI reflects the default
 * configuration on first load. It also stamps the current year into the footer so the
 * site always feels up to date.
 */
function initialize() {
    populateUnits(categorySelect.value);
    categorySelect.addEventListener("change", () => {
        populateUnits(categorySelect.value);
        resultOutput.textContent = "Select units and enter a value to convert.";
    });
    form.addEventListener("submit", handleSubmit);
    resetButton.addEventListener("click", handleReset);

    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    console.info("Unit Conversion Tool initialized");
}

document.addEventListener("DOMContentLoaded", initialize);
