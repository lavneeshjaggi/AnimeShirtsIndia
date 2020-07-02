const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
    category: [
        {
            title: {
                type: String
            },
            items: [
                {
                    title: {
                        type: String
                    },
                    imageUrl: {
                        type: String
                    },
                    description: {
                        type: String
                    },
                    sizes: [
                        {
                            size: {
                                type: String
                            },
                            quantity: {
                                type: String
                            },
                            price: {
                                type: Number
                            }
                        }
                    ],
                    reviews: [
                        {
                            user: {
                                type: mongoose.Schema.Types.ObjectId,
                                ref: 'User'
                            },
                            content: {
                                type: String
                            },
                            likes: [
                                {
                                    like: {
                                        type: Number
                                    }
                                }
                            ],
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Collection', CollectionSchema);