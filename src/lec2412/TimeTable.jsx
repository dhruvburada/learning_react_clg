import * as React from "react";

class Timetable extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>RK University - 6CEA Timetable</h2>
        <table border="2" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8:00 to 8:55</td>
              <td>React (NV)</td>
              <td>React (NV)</td>
              <td>AI/ML (CP)</td>
              <td>React (SMS)</td>
              <td>PD (DS) / DM (Lib) / EC (Lib)</td>
            </tr>
            <tr>
              <td>8:55 to 9:45</td>
              <td>React (NV)</td>
              <td>React (NV)</td>
              <td>AI/ML (CP)</td>
              <td>React (SMS)</td>
              <td>PD (DS) / DM (Lib) / EC (Lib)</td>
            </tr>
            <tr>
              <td>Class/Lab Location</td>
              <td>LL1</td>
              <td>LL5</td>
              <td>LL1</td>
              <td>LL1</td>
              <td>118</td>
            </tr>
            <tr>
              <td>9:45 to 10:00</td>
              <td colSpan="5">Tea Break</td>
            </tr>
            <tr>
              <td>10:00 to 10:50</td>
              <td>.NET (PJT) / Adv. Java (NC)</td>
              <td>.NET (BD) / Adv. Java (NC)</td>
              <td>TOC (AKK)</td>
              <td>AI/ML (CP)</td>
              <td>TOC (AKK)</td>
            </tr>
            <tr>
              <td>10:50 to 11:40</td>
              <td>.NET (PJT) / Adv. Java (NC)</td>
              <td>.NET (BD) / Adv. Java (NC)</td>
              <td>TOC (AKK)</td>
              <td>AI/ML (CP)</td>
              <td>TOC (AKK)</td>
            </tr>
            <tr>
              <td>Class/Lab Location</td>
              <td>LL1 / LL5</td>
              <td>LL1 / LL5</td>
              <td>201</td>
              <td>LL6</td>
              <td>LL7</td>
            </tr>
            <tr>
              <td>11:40 to 12:30</td>
              <td colSpan="5">Lunch Break</td>
            </tr>
            <tr>
              <td>12:30 to 1:20</td>
              <td>PD (Lib) / DM (OD) / EC (RKI)</td>
              <td>PD (DS) / DM (Lib) / EC (Lib)</td>
              <td>PD (Lib) / DM (OD) / EC (RKI)</td>
              <td>.NET (BD) / Adv. Java (Lib)</td>
              <td>Adv. Java (MV) / .NET (Lib)</td>
            </tr>
            <tr>
              <td>1:20 to 2:10</td>
              <td>PD (Lib) / DM (OD) / EC (RKI)</td>
              <td>PD (DS) / DM (Lib) / EC (Lib)</td>
              <td>PD (Lib) / DM (OD) / EC (RKI)</td>
              <td>.NET (BD) / Adv. Java (Lib)</td>
              <td>Adv. Java (MV) / .NET (Lib)</td>
            </tr>
            <tr>
              <td>Class/Lab Location</td>
              <td>214 / Elec. Machine Lab</td>
              <td>118</td>
              <td>214 / Elec. Machine Lab</td>
              <td>LL3</td>
              <td>LL5</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Timetable;
