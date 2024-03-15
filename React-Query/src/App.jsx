// import { useQuery } from "react-query"

import { useMutation } from "react-query"


function App() {
  // useQuery örnek kullanımı

  // https://jsonplaceholder.typicode.com/posts
  // const fetchData = useQuery(['posts'], () => {
  //   return fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
  // }, {
  //   enabled: false
  // })

  // const { data, isLoading, refetch } = fetchData;

  // if (isLoading) {
  //   return <h1>Loading...</h1>
  // }

  // useMutation örnek kullanımı

  // https://jsonplaceholder.typicode.com/users
  const { data, mutate, reset, isLoading } = useMutation(['users'], (newPost) => {
    return fetch('https://jsonplaceholder.typicode.com/users', {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => response.json());
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  console.log('mutation data :>> ', data);

  return (
    <>
      <div>
        {/* useQuery örnek kullanımı */}

        {/* <button onClick={() => refetch()}>Veri Çek</button>
        <div>
          {data && data.map((dt, i) => (
            <div key={i}>
              <h1>{dt.title}</h1>
              <p>{dt.body}</p>
            </div>
          ))}
        </div> */}

        {/* useMutation örnek kullanımı */}

        <button onClick={() => mutate({ title: "Deneme", body: "deneme-body", userId: 1 })}>Veri Ekle</button>

        <button onClick={() => reset({ title: "Deneme", body: "deneme-body", userId: 1 })}>Veri reset</button>

      </div>
    </>
  )
}

export default App
