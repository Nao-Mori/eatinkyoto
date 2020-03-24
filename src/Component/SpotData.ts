const SpotData: 
    { 
        name: string,
        description: string,
        location: { lat: number, lng: number },
        url: string,
        key: number
    }[] = 
    [
        {
            name: "Ginjo Ramen Kubota",
            description: "If you want authentic, simple but great Ramen / Tsukemen, go here. Without any toppings, their soup and noodles are more than enoguh to impress you!",
            location: {lat: 34.9902, lng: 135.7531},
            url: "https://www.google.com/maps/place/Ginjo+Ramen+Kubota/@34.9929389,135.7530504,17z/data=!3m1!4b1!4m5!3m4!1s0x600108a13c7a2d5d:0x2c1acd85fdf5ca75!8m2!3d34.9929389!4d135.7552391",
            key: 0
        },
        {
            name: "Daiki-Suisan",
            description: "The classic sushi-go-round. The best fresh Sushi that you can have close to the main station. It's always busy so I recommend you go here early afternoon.",
            location: {lat: 34.9875, lng: 135.7593},
            url: "https://www.google.com/maps/place/Daiki-suisan+kaitenzushi+Kyoto-tower-sand,+721-1+Higashishiokojicho,+Shimogyo+Ward,+Kyoto,+600-8216/@34.987541,135.7593714,17z/data=!4m2!3m1!1s0x600108afa981817b:0xafc9e8e3c6aa744b",
            key: 1
        },
        {
            name: "Takoyaki-Shichichan",
            description: "If you like octopus, this place will be your heaven! Crispy on the outside, creamy on the inside.",
            location: {lat: 34.9894, lng: 135.7660},
            url: "https://www.google.com/maps/place/%E3%81%9F%E3%81%93%E7%84%BC%E3%81%8D%E4%B8%83%E3%81%A1%E3%82%83%E3%82%93/@34.9894302,135.7660695,17z/data=!3m1!4b1!4m5!3m4!1s0x600108ec835fa07f:0xb01e15e9991156d6!8m2!3d34.9894258!4d135.7682635",
            key: 2
        },
        {
            name: "Yakiniku-Yaruki",
            description: "High quality meat at a reasonable price! This retaurant will be a great introduction to Wagyu.",
            location: {lat: 34.9849, lng: 135.7593},
            url: "https://www.google.com/maps/place/Yaruki+Kyoto+station/@34.983656,135.7584257,17.75z/data=!4m8!1m2!2m1!1s50+Higashikujo+Kamitonodacho,+Minami+Ward,+Kyoto,+601-8002!3m4!1s0x0:0x4da2d2eea14d4c11!8m2!3d34.9838063!4d135.7591275",
            key: 3
        },
        {
            name: "Nakamura Tokichi",
            description: "Luxurious dessert used Japanese ingredients like Matcha, red beans, Mochi and more! Perfect for a break of your trip.",
            location: {lat: 34.9862, lng: 135.7555},
            url: "https://www.google.com/maps/place/Nakamura+Tokichi+Kyoto+Station/@34.9862338,135.7555779,15.75z/data=!3m1!5s0x600108aed0b624b9:0x486cece47d831ee8!4m8!1m2!2m1!1z5Lit5p2R6Jek5ZCJ!3m4!1s0x0:0x90cf50a21527eeeb!8m2!3d34.9860052!4d135.7581532",
            key: 4
        },

    ]

export default SpotData