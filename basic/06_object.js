// 오브젝트 object
// -자바스크립트 데이터
// -상태와 행동을 가지는 데이터
// -phone의 상태(properties) -> color, size
// -phone의 행동(methods) -> ring, take a picture, paly music
// -형식 {키 : 값}

const user = {
    firstName : "picaso"
    age : 30,
    email: "picaso@gmail.com",
    works : [
        {id: 1, title: "게르니카", price:10000, like: 50}
        {id: 2, title: "아비뇸의 처녀들", price:30000, like: 80}
        {id: 3, title: "우는 여인", price:50000, like: 200}
    ],
    // login: function() {
    //     console.log("user loggid in.........")
    // }
    login() {
        console.log("user loggid in.........")
    },
    logout() {
        console.log("user loggid out.........")
    },
    goodWorks() {
        console.log("피카소의 대표작");
        this.works.forEach(this.works => {
            console.log(`${work.id}, ${work.title}, ${work.like}`);
        });
    },
};

console.log(user.age);
console.log(user.fullName);
user.login();
user.logout();
user.goodWorks();