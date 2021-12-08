const Api = "https://api.themoviedb.org/3"


export function HttpClient(path){
    return fetch(Api + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzVjZGJhMzNhMjVlZWYzYjhiMWRhMmEwZDBmMDRmNSIsInN1YiI6IjYxYjBkODUzNTgwMGM0MDAxOTk5MmYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xpEwdylDECkIzfNoR2vbISlwD2Bhnbg0gk_2dHelIKw",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then(result => result.json())
}