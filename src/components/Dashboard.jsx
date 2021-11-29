/** @format */
import "./dashboard.css";
import { Link } from "react-router-dom";
function Dashboard() {
	return (
		<div>
			<Link to='/details'>
				<div style={{ marginLeft: "30px" }}>
					<h1>Recommended Movies</h1>
					<div className='main'>
						<img
							src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAyN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303116-cfgddhrhsg-portrait.jpg'
							alt=''
							className='img'
						/>
						<div className='mv'>Antim</div>
					</div>
					<div className='main'>
						<img
							src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODMlICAxMzNrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00097952-dcgejsfjnm-portrait.jpg'
							alt=''
							className='img'
						/>
						<div className='mv'>Sorryavanshi</div>
					</div>
					<div className='main'>
						<img
							src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjUlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00113105-dsahbaxhab-portrait.jpg'
							alt=''
							className='img'
						/>
						<div className='mv'>Satyamav Jayte 2</div>
					</div>
					<div className='main'>
						<img
							src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTNrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00307544-fqwylyjdfa-portrait.jpg'
							alt=''
							className='img'
						/>
						<div className='mv'>Tadap</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
export default Dashboard;
