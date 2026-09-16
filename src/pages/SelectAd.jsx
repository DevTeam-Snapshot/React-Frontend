import Topbar from '../components/topbar/Topbar';
import Planner from '../components/guide/Planner';
import SelectImg from '../components/selectimg/SelectImg';

function SelectAd() {

	return (
		<>
            <Topbar/>
            <div className="container-fluid px-4 py-4" style={{background:"linear-gradient(180deg, #fdf1ea 0%, #f7eef4 100%)"}}>
                <div className="row g-4">
                    <Planner/>
                    <SelectImg/>
                </div>
            </div>
		</>
	);
}

export default SelectAd;