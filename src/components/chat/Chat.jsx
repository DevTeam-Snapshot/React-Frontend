import { useState, useRef, useEffect } from 'react';

function markLatestBotAvatar() {
  document.querySelectorAll('.bot-avatar--active')
    .forEach(el => el.classList.remove('bot-avatar--active'));

  const avatars = document.querySelectorAll('.bot-avatar');
  const latest = avatars[avatars.length - 1];
  if (latest) latest.classList.add('bot-avatar--active');
}

const Chat = function({activeStepIndex, onStepComplete}) {
    const [messages, setMessages] = useState([
        {
        id: 1,
        role: 'bot',
        text: '안녕하세요!\n어떤 숙소의 광고를 만들어드릴까요?',
        category: 'type'
        },
    ]);
    const [input, setInput] = useState('');
    const [isBotTyping, setIsBotTyping] = useState(false);

    const addMessage = (role, text, category) => {
        setMessages(prev => [
        ...prev,
        { id: Date.now() + Math.random(), role, text, category }
        ]);
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        addMessage('user', input);
        const userText = input;
        setInput('');
        setIsBotTyping(true);
        onStepComplete();

        try {
        const reply = await fetchBotReply(userText); // 백엔드/AI API 호출
        addMessage('bot', reply);
        } catch (err) {
        addMessage('bot', '죄송해요, 응답 중 오류가 발생했어요.');
        } finally {
        setIsBotTyping(false);
        }
    };

    const handleOptionClick = (optionLabel) => {
        addMessage('user', optionLabel);
        // 옵션 선택도 결국 "사용자가 말한 것"으로 취급해서 같은 흐름 태우기
        handleBotResponseFor(optionLabel);
    };

    return (
        <div className="chat-panel">
        <div className="chat-messages">
            {messages.map((msg, i) => {
            const isLastBot = msg.role === 'bot' &&
                i === messages.map(m => m.role).lastIndexOf('bot');

            return (
                <div key={msg.id} className="d-flex align-items-start gap-3 mb-4">
                {msg.role === 'bot' && (
                    <div className={`bot-avatar d-flex align-items-center justify-content-center ${isLastBot ? 'bot-avatar--active' : ''}`}>
                    <i className="bi bi-robot"></i>
                    </div>
                )}
                <div className={msg.role === 'bot' ? 'bot-message pt-1' : 'user-message pt-1'}>
                    {msg.text}
                </div>
                </div>
            );
            })}

            {isBotTyping && (
            <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bot-avatar bot-avatar--active d-flex align-items-center justify-content-center">
                <i className="bi bi-robot"></i>
                </div>
                <div className="bot-message pt-1 typing-indicator">...</div>
            </div>
            )}
        </div>

        {/* 옵션 카드는 대화 시작 전(메시지가 1개뿐일 때)에만 보여주는 게 자연스러움 */}
        {messages.length === 1 && (
            <div className="row g-2 mb-3">
            {['호텔', '모텔', '리조트', '펜션'].map(opt => (
                <div className="col-6 col-md-3" key={opt}>
                <button className="option-card" onClick={() => handleOptionClick(opt)}>
                    {opt}
                </button>
                </div>
            ))}
            </div>
        )}

        {/* 입력창 */}
        <div className="chat-input-row d-flex align-items-center px-3 py-2 gap-2 mb-2">
            <input
            type="text"
            className="form-control flex-grow-1"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="예: 바다가 보이는 펜션 광고를 만들고 싶어요"
            />
            <button className="send-btn" onClick={handleSend}>
            <i className="bi bi-send-fill"></i>
            </button>
        </div>
        </div>
    );
};

export default Chat;