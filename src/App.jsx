import { useState } from 'react';
import { sendChatMessage } from './api';

export default function App() {
  const [input, setInput] = useState('');
  const [customers, setCustomers] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitMessage = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    setIsLoading(true);
    setMessage('');
    try {
      const response = await sendChatMessage(input.trim());
      setCustomers(response.customers || []);
      setMessage(response.message);
    } catch {
      setCustomers([]);
      setMessage('Backend에 연결할 수 없습니다. 서버가 실행 중인지 확인하세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="app">
      <h1>고객 조회</h1>
      <form onSubmit={submitMessage}>
        <label htmlFor="message-input">요청 메시지</label>
        <input id="message-input" value={input} onChange={(event) => setInput(event.target.value)} placeholder="고객리스트 알려줘" />
        <button type="submit" disabled={isLoading}>{isLoading ? '조회 중...' : '전송'}</button>
      </form>
      {message && <p className="message">{message}</p>}
      {customers.length > 0 && <p className="customers">고객 목록: {customers.map((customer) => customer.name).join(', ')}</p>}
    </main>
  );
}
