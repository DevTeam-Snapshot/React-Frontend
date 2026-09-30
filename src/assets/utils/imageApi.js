export async function generateDrafts(sessionId) {
  const res = await fetch(`/api/planning-sessions/${sessionId}/draft-generations`, {
    method: "POST",
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`초안 생성 실패 (${res.status}) ${detail}`);
  }
  return res.json();
}

export async function regenerateDrafts(sessionId) {
    const res = await fetch(`/api/planning-sessions/${sessionId}/draft-generations/regenerate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
        let detail = `요청 실패 (${res.status})`;
        try {
            const body = await res.json();
            if (body?.detail) detail = typeof body.detail === "string" ? body.detail : detail;
        } catch { /* JSON이 아닌 응답은 무시 */ }

        const err = new Error(detail);
        err.status = res.status; // SelectImg에서 409(이미 사용함) 판별용
        throw err;
    }

    return res.json(); // { session_id, regeneration_used, drafts: [...] }
}
