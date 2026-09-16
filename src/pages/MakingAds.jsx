import Topbar from '../components/topbar/Topbar';
import Guide from '../components/guide/Guide';
import Chat from '../components/chat/Chat';

import { useLocation, Navigate } from "react-router-dom";

function MakingAds() {
    const location = useLocation();

    // state.fromButton이 없으면 = 버튼을 안 거치고 온 것 = 홈으로 되돌림
    if (!location.state?.fromButton) {
        return <Navigate to="/" replace />;
    }

	return (
		<>
        	<Topbar />
            <div className="container-fluid px-4 py-4" style={{maxWidth:"1280px", margin:"0 auto", background:"linear-gradient(180deg, #fdf1ea 0%, #f7eef4 100%)"}}>
                <Guide />
                <Chat />
            </div>
		</>
	);
}

export default MakingAds;