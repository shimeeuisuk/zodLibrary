import React from "react";
import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

// 유효하지 않은 사용자 데이터 예시
const invalidUserData = {
  id: 1,
  name: "John Doe",
  email: "invalid-email", // 이메일 형식이 아닌 값
};

// 유효한 사용자 데이터 예시
const validUserData = {
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
};

function UserProfile({ user }) {
  // Zod 스키마를 사용하여 데이터 유효성 검사
  try {
    userSchema.parse(user);
  } catch (error) {
    return <div>유효하지 않은 사용자 데이터입니다.</div>;
  }

  // 유효한 데이터인 경우 UI 렌더링
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>사용자 프로필</h2>
      <UserProfile user={invalidUserData} /> {/* 유효하지 않은 데이터 */}
      <UserProfile user={validUserData} /> {/* 유효한 데이터 */}
    </div>
  );
}

export default App;
