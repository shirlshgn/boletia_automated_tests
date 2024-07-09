"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const configure_1 = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
(0, configure_1.setHeadlessWhen)(process.env.HEADLESS);
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
(0, configure_1.setCommonPlugins)();
exports.config = {
    tests: './features/*.feature', // Apunta a tus archivos .feature
    output: './output',
    helpers: {
        WebDriver: {
            url: 'https://www.admin.boletia.com/',
            browser: 'chrome'
        }
    },
    include: {
        I: './steps_file.ts', // Asegúrate de que la extensión sea .ts
        loginPage: './page_objects/loginPage.ts'
    },
    // Configuración de Cucumber:
    gherkin: {
        features: './features/*.feature',
        steps: ['./step_definitions/login_steps.js']
    },
    name: 'boletia_pruebas',
    plugins: {
        screenshotOnFail: {
            enabled: false
        },
        stepByStepReport: {
            enabled: true,
            screenshotsForAllureReport: true
        },
        autoDelay: {
            enabled: true
        }
    }
};
