import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Headphones } from 'lucide-react';
import { useI18n } from '@/i18n/context';

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
}

export function ChatWidget() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'form' | 'chat'>('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setMessages([{ id: 1, text: t('chat_greeting'), isBot: true }]);
    setStep('chat');
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: ChatMessage = { id: Date.now(), text: input, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: t('lang_switch') === 'EN'
            ? 'شكراً لتواصلك معنا! سيتواصل معك فريقنا قريباً.'
            : 'Thank you for reaching out! Our team will contact you soon.',
          isBot: true,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-bcare-navy text-white shadow-bcare-xl transition-all duration-300 hover:scale-110 hover:bg-bcare-navy-dark animate-bounce-subtle"
          aria-label="Chat"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bcare-orange opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-bcare-orange" />
          </span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 z-50 flex max-h-[600px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-bcare-xl animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-bcare-navy to-bcare-navy-dark px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Headphones className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{t('chat_title')}</h3>
                <p className="text-xs text-white/70">{t('chat_subtitle')}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                setStep('form');
                setMessages([]);
              }}
              className="rounded-lg p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form step */}
          {step === 'form' && (
            <form onSubmit={startChat} className="space-y-4 p-5">
              <p className="text-sm text-bcare-gray text-center pb-2">
                {t('chat_subtitle')}
              </p>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                  {t('chat_name')}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('chat_name')}
                  className="bcare-input"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                  {t('chat_phone')}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05xxxxxxxx"
                  className="bcare-input"
                  required
                />
              </div>
              <button type="submit" className="bcare-btn-primary w-full">
                <MessageCircle className="h-5 w-5" />
                <span>{t('chat_start')}</span>
              </button>
            </form>
          )}

          {/* Chat step */}
          {step === 'chat' && (
            <>
              {/* Messages */}
              <div className="flex-1 space-y-3 overflow-y-auto p-5" style={{ maxHeight: '350px' }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.isBot
                          ? 'bg-bcare-gray-light text-bcare-dark'
                          : 'bg-bcare-navy text-white'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={sendMessage} className="border-t border-bcare-gray-border p-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t('chat_placeholder')}
                    className="flex-1 rounded-xl border border-bcare-gray-border bg-bcare-gray-light px-4 py-2.5 text-sm outline-none focus:border-bcare-navy"
                  />
                  <button
                    type="submit"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bcare-navy text-white transition-all hover:bg-bcare-navy-dark active:scale-95"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
