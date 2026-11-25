# Youth Web Novel 배포용

## 1. Firebase 설정
1. Firebase Console에서 `web-novel1` 프로젝트를 열고 웹 앱 설정을 확인하세요.
2. `src/firebase.js`의 `YOUR_API_KEY`, `YOUR_MESSAGING_SENDER_ID`, `YOUR_APP_ID`를 실제 값으로 교체하세요.
3. Firebase Authentication에서 이메일/비밀번호 로그인 방식을 활성화하세요.
4. Realtime Database를 사용 중인지 확인하세요.

## 2. 설치 및 로컬 확인
```bash
npm install
npm run dev
```
Vite가 표시하는 로컬 주소를 열어 확인합니다.

## 3. 빌드
```bash
npm run build
```

## 4. Firebase CLI 설치 및 로그인 (최초 1회)
```bash
npm install -g firebase-tools
firebase login
```

## 5. 배포
```bash
firebase deploy --only database
firebase deploy --only hosting
```

## 주의
- 이 scaffold는 기존 데이터 구조를 자동 변환하지 않습니다.
- 기존 Firebase 규칙과 데이터 백업 후 테스트 프로젝트/Emulator에서 검증하세요.
- 이 버전은 username을 내부 이메일 별칭으로 매핑하는 간단한 방식입니다. 이름 중복 처리와 이메일 별칭 정책에 대한 추가 보완이 필요할 수 있으며, 실제 서비스 공개 전 보안 검토가 필요합니다.
- Firebase 웹 설정은 클라이언트에 공개되는 설정이지만, 보안은 Authentication과 Database Rules로 보호해야 합니다.
- 현재 좋아요/읽음 표시 등은 기본 구현이며, 보안 규칙은 운영용으로 추가 검증이 필요합니다.
