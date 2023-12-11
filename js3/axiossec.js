//AXIOS GLOBAL
axios.defaults.headers.common['X-Auth-Token']=

'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

//GET REQUEST
function getTodos(){
    axios
    .get('https://jsonplaceholder.tyicode.com/todo?_limit=5',{timeout:5000})
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))
}

//POST REQUEST
function addTodos(){
    axios
    .post('https://jsonplaceholder.typicode.com/todos',{
        title:'New Todo',
        complete:false
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))
}

//PUT/PATCH REQUEST
function updateTodos(){
    axios
    // .put('https://jsonplaceholder.typicode.com/todos/1',{
    //     title:'New Todo',
    //     complete:false
    // })
    // .then(res=>showOutput(res))
    // .catch(err=>console.error(err))
    .patch('https://jsonplaceholder.typicode.com/todos/1',{
        title:'New Todos',
        complete:false
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))
}

//DELETE REQUEST
function removeTodo(){
    axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))
}

//SIMULTANEOUS DATA
function getData(){
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsoplaceholder.typicode.com/posts')
    ])
    .then(axios.spread((todos,post)=>showOutput(post)))
    .catch(err=>console.error(err))
}

//CUSTOM HEADERS
function customHeader(){
    const config={
        header:{
            'content-type':'application/json',
            Authorization:'sometoken'
        }
    };

axios
.post('https://jsonplaceholder.typicode.com/todos',{
    title:'New Todo',
    complete:false
},config)
.then(res=>showOutput(res))
.catch(err=>console.error(err))
}

//TRANSFORMING REQUEST & RESPOSES
function transformRespose(){
    const options={
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:'Hello World'
        },
        transformRespose:axios.defaults.transformRespose.concat(data=>{
            data.title=data.title.toUpperCase();
            return data;
        })
    }
    axios(options).then(res=>showOutput(res))
}

//ERROR HANDELING
function errorHandling(){
    axios
    .get('https://jsonplaceholder.typicode.com/todoss',{
        ValidateStatus:function(status){
            return status<500;//reject only if status is greater or equal 500
        }
    })
    .then(res=>showOutput(res))
    .catch(err=>{
        if(err.respose){
            console.log(err.respose.data);
            console.log(err.respose.status);
            console.log(err.respose.headers);
            if(err.respose.status===400){
                alert('Error:Page Not Found');
            }
            else if(err.request){
                //request was made but no response
                console.error(err.request);
            }else{
                console.error(err.message);
            }
        }
    })
}

//CANCEL TOKEN
function cancelToke(){
    const source=axios.cancelToke.surce();
    axios
    .get('https://jsonplaceholde.typicode.com/todos',{
        cancelToke:source.token
    })
    .then(res=>showOutput(res))
    .catch(thrown=>{
        if(axios.isCancel(thrown)){
            console.log('Request canceled',thrown.message)

        }
    })
    if(true){
        source.cancel('request canceled!')
    }
}

//INTERCEPTING REQUESTS & RESPOSES
axios.interceptor.request.use(config=>{
    console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`);
    return config
}),error=>{
    return Promise.reject(error)
}

//Axios INSTANCES
const axiosInstance=axios.create({
    baseURL:'https://jsonplaceholde.typicode.com'
})
axiosInstance.get('/comments').then(res=>showOutput(res))


 // Show output in browser
 function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
  