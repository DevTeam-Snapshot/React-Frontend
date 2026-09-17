import Topbar from '../components/topbar/Topbar';
import Guide, {STEPS} from '../components/guide/Guide';
import Chat from '../components/chat/Chat';

import { useLocation, Navigate } from "react-router-dom";
import { useState } from "react";

function MakingAds() {
    const location = useLocation();

    // state.fromButton이 없으면 = 버튼을 안 거치고 온 것 = 홈으로 되돌림
    if (!location.state?.fromButton) {
        return <Navigate to="/" replace />;
    }

    const [activeStepIndex, setActiveStepIndex] = useState(0);

	return (
		<>
        	<Topbar />
            <div className="container-fluid px-4 py-4" style={{maxWidth:"1280px", margin:"0 auto", background:"linear-gradient(180deg, #fdf1ea 0%, #f7eef4 100%)"}}>
                <Guide activeStepIndex={activeStepIndex} />
                <Chat
                    activeStepIndex={activeStepIndex}
                    onStepComplete={() => setActiveStepIndex(prev => Math.min(prev + 1, STEPS.length - 1))}/>            
            </div>
		</>
	);
}

export default MakingAds;