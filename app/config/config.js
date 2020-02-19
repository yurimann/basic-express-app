const config = () => {
    const configJson = {
        app: {
            name: 'himama',
            host: '127.0.0.1',
            port: '8080'
        }
    }

    const get = (property) => {
        if (typeof property === 'undefined' || property === null) {
            throw new Error(`Invalid property '${property}' has been provided.`)
        }

        const value = getNestedPropertyValue(configJson, property)

        if (typeof value === 'undefined') {
            throw new Error(`Config property '${property}' is not defined.`)
        }

        return value
    }

    const getNestedPropertyValue = (configObject, property) => {
        const [rootProperty, ...elements] = Array.isArray(property)
            ? property
            : property.split('.')
        const propertyValue = configObject[rootProperty]

        if (elements.length === 0) {
            return propertyValue
        }

        if (typeof propertyValue !== 'object' || propertyValue === null) {
            return undefined
        }

        return getNestedPropertyValue(propertyValue, elements)
    }

    return {
        get: get
    }
}

module.exports = config()