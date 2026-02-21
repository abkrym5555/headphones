import { UpdateFollower } from "react-mouse-follower";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";

const ServData = [
  {
    id: 1,
    title: "security",
    dec: "Lorem ipsum dolor, sit amet  m dolor, sit amet c m dolor, sit amet cconsectetur adipisicing elit. Necessitatibus dolore incidunt assumenda,",
    delay: 0.5,
    icon: Icon1,
  },
  {
    id: 2,
    title: "Gurantee",
    dec: "Lorem ipsum dolor, sit amet consectetur m dolor, sit amet c m dolor, sit amet c adipisicing elit. Necessitatibus dolore incidunt assumenda,",
    delay: 0.8,
    icon: Icon2,
  },
  {
    id: 1,
    title: "Affordability",
    dec: "Lorem ipsum dolor, sit amet consectetur m dolor, sit amet c m dolor, sit amet c adipisicing elit. Necessitatibus dolore incidunt assumenda,",
    delay: 1.1,
    icon: Icon3,
  },
];
function Servies() {
  return (
    <section className="font-Poppins bg-gray-100 py-8">
      <div className="container py-14">
        <h1 className="pb-10 text-center text-3xl font-bold">Services</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {ServData.map((serv) => (
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "transparent",
              zIndex: 999,
              followSpeed: 0.5,
              scale: 5,
              rotate: 360,
              backgroundElement: (
                <div style={{ width: "100%" }}>
                  <img src={serv.icon} alt="..." />
                </div>
              ),
            }}
          >
            <div className="mx-auto flex max-w-75 flex-col items-center justify-center rounded-xl bg-white p-5 shadow-lg">
              <img className="mb-4 w-25" src={serv.icon} alt={serv.title}></img>
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">{serv.title}</h1>
                <p className="text-center text-sm text-black/75">{serv.dec}</p>
              </div>
            </div>
          </UpdateFollower>
        ))}
      </div>
    </section>
  );
}

export default Servies;
