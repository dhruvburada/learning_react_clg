import { useState } from "react";
import { page1,page2,page3 } from "./file2";
import { UserProvider } from "./file1";

function SelectPage({i})
{
    const Page = [page1,page2,page3][i];
    return (
        
            <Page/>
    )
}

export default function useContextExample() {
    const [page, setPage] = useState(0);
    return (
      <UserProvider>
        <div>
          <button onClick={() => setPage(0)} disabled={SelectPage == 0}>Page 1</button>
          <button onClick={() => setPage(1)} disabled={SelectPage == 1}>Page 2</button>
          <button onClick={() => setPage(2)} disabled={SelectPage == 2}>Page 3</button>
          <SelectPage i={page}/>
        </div>
      </UserProvider>
    );
  }