export const testShowData = {
    name: 'SOME SHOW',
    summary: '<p>yadda yadda yadda yap yap</p>',
    image: {
            original: "cover.jpg",
        },
     _embedded: {
        episodes: [ 
            {
                id: 123456,
                image: {
                    medium: "img-med.jpg", 
                    original: "img-og.jpg"
                },
                name: "EPISODE TITLE",
                number: 22,
                runtime: 120,
                season: 100,
                summary: "<p>boom badda boom.</p>",
            },
            {
                id: 223456,
                image: {
                    medium: "img-med.jpg", 
                    original: "img-og.jpg"
                },
                name: "EPISODE TITLE 2",
                number: 22,
                runtime: 120,
                season: 101,
                summary: "<p>boom badda boom.</p>",
            }
        ]// episodes
    }//embedded
}