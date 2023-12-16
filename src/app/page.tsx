
"use client"
import{useState} from "react"


type task = {

id: number   
title: string
end_date: string
done: boolean
}
const demoTasks: task[] = [
  {
    id: 1,
    title: "牛乳を買う",
    end_date: "2021-05-31",
    done: false,
  },
  {
    id: 2,
    title: "本を読む",
    end_date: "2021-06-30",
    done: true,
  },
  {
    id: 3,
    title: "ゴミを出す",
    end_date: "2021-06-30",
    done: true,
  },
]















export default function Page(){
  const [tasks,setTasks] = useState<task[]>(demoTasks)
  
  function addTask(formData: FormatDate) {
    // addTask関数の実装を追加する
    // 新しいタスクを作成し、setTasksを使ってtasksに追加するなど
  console.log
  
  
  }
  
  
  
  
  
  return (
    <div className="p-8">
      <h1 className="mb-4">To do 管理アプリ</h1>
      <form className="mb-8 space-x-4">
        <input type={"text"} name={"title" }/>
        <input type={"date"} name={"end_date" }/>
        <input type="submit" value="Submit" />


      </form>




    </div>
    


     





      
      {tasks.map((item) => (
        <div key={item.id}>
          <input type="checkbox" checked={item.done} />
          {/* 他のタスクに関連する表示や操作を追加する */}
          <span>{item.title}</span>
          <span>{item.end_date}</span>
        </div>
      ))}
    </div>
  );
}
