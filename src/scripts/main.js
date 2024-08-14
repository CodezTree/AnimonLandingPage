document.addEventListener("DOMContentLoaded", () => {
    const wordsContainer = document.querySelector(".right");
    let words = Array.from(document.querySelectorAll(".word"));
    const wordHeight = words[0].offsetHeight;

    let originIndex = Array.from({ length: words.length }, (_, i) => i);
    // 변경된 포지션 값 위치를 순서대로 저장하는 배열
    let modifiedPos = [...originIndex];
    let already_used = [];

    console.log("ARR :" + modifiedPos);

    let middleIndex = Math.floor(words.length / 2);
    console.log("Mid index : " + middleIndex);

    function updateWordPositions() {
        for (index = 0; index < words.length; index++) {
            words[index].classList.remove("center");
            words[modifiedPos[index]].style.transform = `translateY(${
                (index - modifiedPos[index]) * wordHeight
            }px)`;
            words[modifiedPos[index]].style.opacity =
                index === middleIndex ? "1" : "0.3";
        }
    }

    function animateWords() {
        // 랜덤 단어를 선택, 만약 already_used가 다 찼으면 비워준다

        // 가능한 포지션 선택
        let availableItems = originIndex.filter(
            (item) => !already_used.includes(item)
        );

        console.log("Item available : " + availableItems);

        if (availableItems.length === 0) {
            already_used.length = 0; // 배열 초기화
            availableItems = [...originIndex];
        }

        // 랜덤으로 선택
        const randomIndex = Math.floor(Math.random() * availableItems.length);
        const selectedItem = availableItems[randomIndex];

        // 선택된 단어를 already_used 배열에 추가
        already_used.push(selectedItem);
        console.log("Item selected : " + selectedItem);

        // 선택된 단어를 중앙으로 이동
        // 선택된 아이템을 제거
        modifiedPos.splice(
            modifiedPos.findIndex((num) => num == selectedItem),
            1
        );
        console.log("Selected Item deletion : " + modifiedPos);

        // 선택된 아이템을 중앙에 삽입
        modifiedPos.splice(middleIndex, 0, selectedItem);
        console.log("Final modified item list : " + modifiedPos);

        // 아이템 시각 효과 & 위치 업데이트
        updateWordPositions();
        words[selectedItem].classList.add("center");
    }

    updateWordPositions(); // Initialize positions
    setInterval(animateWords, 1000);
    //animateWords();
});

function SendEmail() {
    const email_input = document.getElementById("Email");
    const nickname_input = document.getElementById("Nickname");

    console.log(
        "Found Email / Nickname : " +
            email_input.value +
            " / " +
            nickname_input.value
    );

    gtag("event", "user_register", {
        email_address: email_input.value,
        nickname: nickname_input.value,
    });
}
