/**
 * Automobile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        year: {
            type: 'integer',
            required: true
        },
        make: {
            type: 'string',
            required: true
        },
        model: {
            type: 'string',
            required: true
        },
        vin: {
            type: 'string',
            minLength: 17,
            maxLength: 17,
            unique: true
        },
        color: {
            type: 'string'
        },
        numberCylinders: {
            type: 'integer',
            max: 16
        },
        salvageTitle: {
            type: 'boolean',
            defaultsTo: false
        },
        transmissionType: {
            type: 'string',
            enum: ['man', 'auto']
        },
        licensedState: {
            type: 'string'
        },
        licensedCountry: {
            type: 'string',
            in: ['USA', 'Canada', 'Mexico']
        },
        licenseNumber: {
            type: 'string',
            alphanumericdashed: true
        }

    }
};
