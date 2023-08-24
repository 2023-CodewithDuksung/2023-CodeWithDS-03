// 이메일 인증 버튼 클릭 시 이벤트
function sendVerificationCode() {
    alert("인증코드를 보냈습니다. 메일을 확인해주세요!");
}

function verifyEmailCode() {
    alert("이메일이 인증되었습니다.");
// 여기서 이메일 인증 코드를 전송하는 로직이 들어갑니다.
    
    // 인증 코드 텍스트와 확인 버튼을 숨깁니다.
    document.getElementById('verificationCodeSection').style.display = 'none';
}

// 회원가입 버튼 클릭 시 이벤트
function completeSignUp() {
    alert("가입되셨습니다!");
    window.location.href = "welcome.html"; // login.html로 이동
}

// 회원가입 버튼 활성화 여부 업데이트
function updateSignUpButtonStatus() {
    const nameInput = document.getElementById("nameInput");
    const idInput = document.getElementById("idInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    const signUpButton = document.getElementById("signUpButton");

    if (idInput&& passwordInput.value && confirmPasswordInput.value) {
        signUpButton.disabled = false;
    } else {
        signUpButton.disabled = true;
    }
}

document.addEventListener("input", updateSignUpButtonStatus);




window.addEventListener("load", function() {
    updateSignUpButtonStatus(); // 페이지 로딩 시 초기 상태 반영
});
