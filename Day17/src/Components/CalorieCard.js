function Card({ title, calories }) {
    return (
      <div className="card">
        <h2>{title || 'My Card'}</h2>
        <p>you have consumed {calories || 56} cals today</p>
      </div>
    );
  }
  export default function CalorieCard({ menu }) {
    return (
      <div>
        <h2>Calorie Read Only</h2>
        <div className="CardContainer">
          {Object.keys(menu).map((item) => {
            return <Card title={item} calories={menu[item]} />;
          })}
        </div>
      </div>
    );
  }
  