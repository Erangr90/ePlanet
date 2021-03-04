const shows = [
    {
        _id:1,
        date:'2021-03-21',
        time:{
            hour:9,
            minutes:0
        },
        hall:{
            _id:1,
            number:1,
            hallKind:{
                _id:1,
                kind:'IMAX',
                price:10
            },
            seats:[
                {
                 _id:1,
                 number:1
                },
                {
                  _id:2,
                  number:2
                }
            ]

        },
        movie:{
        _id:1,
        name:'A Quiet Place Part 2',
        genre:'Horror',
        minAge: 16,
        poster:'/posters/AQuietPlacePart2.jpg',
        length:90,
        price:13.60,
        discountedPrice:10,
        rating:4.3,
        numOfRates: 11
        },


    },
    {
        _id:2,
        date:'2021-03-21',
        time:{
            hour:9,
            minutes:0
        },
        hall:{
            _id:2,
            number:2,
            hallKind:{
                _id:1,
                kind:'IMAX',
                price:10
            },
            seats:[
                {
                 _id:101,
                 number:101
                },
                {
                  _id:102,
                  number:102
                }
            ]

        },
        movie:{
            _id:3,
            name:'Fast and Furious 9',
            genre:'Action',
            minAge: 9,
            poster:'/posters/FastandFurious9.jpg',
            length:87,
            price:12.15,
            discountedPrice:null,
            rating:4.7,
            numOfRates: 16
        },


    },
    {
        _id:3,
        date:'2021-03-21',
        time:{
            hour:9,
            minutes:0
        },
        hall:{
            _id:3,
            number:3,
            hallKind:{
                _id:1,
                kind:'IMAX',
                price:10
            },
            seats:[
                {
                 _id:201,
                 number:201
                },
                {
                  _id:202,
                  number:202
                }
            ]

        },
        movie:{
            _id:5,
            name:'Ghost busters: After life',
            genre:'Fantasy',
            minAge: 6,
            poster:'/posters/GhostbustersAfterlife.jpg',
            length:84,
            price:10.64,
            discountedPrice:null,
            rating:4.5,
            numOfRates: 17
        },


    },
]

export default shows