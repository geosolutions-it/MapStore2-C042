const path = require("path");

const themeEntries = require('./MapStore2/themes.js').themeEntries;
const extractThemesPlugin = require('./MapStore2/themes.js').extractThemesPlugin;

module.exports = {
    ...(require('./MapStore2/buildConfig')(

        {
            'MapStore2-C042': path.join(__dirname, "js", "app"),
            'MapStore2-C042-embedded': path.join(__dirname, "MapStore2", "web", "client", "product", "embedded"),
            'MapStore2-C042-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api")
        },
        themeEntries,
        {
            base: __dirname,
            dist: path.join(__dirname, "dist"),
            framework: path.join(__dirname, "MapStore2", "web", "client"),
            code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
        },
        extractThemesPlugin,
        false,
        "/dist/",
        '.MapStore2-C042'
    )),
    devServer: {
        proxy: {
            '/rest/geostore': {
                target: "http://adbarno.tk/mapstore",
                secure: false,
                headers: {
                    host: "adbarno.tk"
                }
            },
            '/pdf': {
                target: "http://adbarno.tk/mapstore",
                secure: false,
                headers: {
                    host: "adbarno.tk"
                }
            },
            '/mapstore/pdf': {
                target: "http://adbarno.tk",
                secure: false,
                headers: {
                    host: "adbarno.tk"
                }
            },
            '/proxy': {
                target: "http://adbarno.tk/mapstore",
                secure: false,
                headers: {
                    host: "adbarno.tk"
                }
            },
            '/geoserver': {
                target: "http://adbarno.tk",
                headers: {
                    host: "adbarno.tk"
                },
                pathRewrite: { '/docs': '/mapstore/docs' }
            }
        }
    }
};
