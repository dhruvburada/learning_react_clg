import * as React from "react";

class Timetable extends React.Component {
  render() {
    return (
      <div>
        <table border={2} style={{ width: "100%",borderCollapse:"collapse"}}>
          
            <tr>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
            <tr>
              <td>8:05 to 8:55</td>
              <td rowSpan={2}>React</td>
              <td>AI ML</td>
              <td>React SMS</td>
              <td>PD</td>
            </tr>
            <tr>
              <td>8:55 to 9:45</td>
              <td>React</td>
              <td>React NV</td>
              <td>AI ML</td>
              <td>React SMS</td>
              <td>PD</td>
            </tr>
            <tr>
              <td>Class/ Lab Location</td>
              <td>LL1</td>
              <td>LL5</td>
              <td>LL1</td>
              <td>LL1</td>
              <td>118</td>
            </tr>
          
        </table>
      </div>
    );
  }
}

export default Timetable;
