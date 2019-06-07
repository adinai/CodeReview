<template>
  <div class="taskmanager">
    <h1>Task Manager</h1>
    <p> You can add taks and set an alarm!</p>
    <el-container>
    <el-main> 
      <div class="current-t"> 
        <span> {{currentTime}}</span> 
        </div>
      <el-divider></el-divider>
    <div v-if="isEmpty">  
    <b-alert show variant="danger">There is no Tasks yet.</b-alert>
    </div>
    <div v-else>
      
      <el-table
      :data="tasks"
      :row-class-name="tableRowColor">
      <el-table-column
      prop="name"
      label="Task">
                </el-table-column>
                <el-table-column
                        label="Time">
                    <template slot-scope="scope">
                        <span>{{getDate(scope.row.date)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="Remove">
                    <template slot-scope="scope">
                        <el-button type="danger" icon="el-icon-delete" @click="removeTask(scope.row)" circle
                                   size="small"></el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        label="Done">
                    <template slot-scope="scope">
                        <el-button type="success" icon="el-icon-check"  @click="completeTask(scope.row)"
                                   size="small"></el-button>
                    </template>

                </el-table-column>
            </el-table>
              <div>
            <el-row type="flex" justify="center" class="counterSection">
                <el-col :span="4">
                    Done: {{completed}}
                </el-col>
                <el-col :span="3">
                    Total : {{total}}
                </el-col>
            </el-row>
        </div>
    </div>
    </el-main>
    <el-aside width="50%"> 
      <div v-if="isWrongTask">
        <el-alert
        :title="errorMessage"
        :center="true"
        :type= "error">
        </el-alert>
      </div>
  

    <div class="left-bar"> 
      <el-time-picker
      width="100%"
      v-model="date"
      placeholder="Pick a time">
      </el-time-picker>
      <el-input type="text" class="activity" placeholder="Add your Task" v-model="task"></el-input>
      <el-button @click="addTaskMethod()"> Add Task </el-button>
    </div>
    </el-aside>
 </el-container>
 <div v-if="isSetAlarm"> Alarm </div>
 </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import moment from 'moment'
export default {
  name: 'TaskManager',
  data() {
    return {
      task: 'Eat Ice Cream',
      wrong: false,
      date: '',
      errorMessage : '',
      currentTime: setInterval(()=>{
			this.currentTime = moment().format('LTS')
    },1000),
    isSetAlarm: false
    }
    },
    computed: {
      ...mapGetters({
        'tasks': 'getTasks'
      }),
      isWrongTask() {
        return this.wrong
      },
      completed() {
        return this.tasks.filter((val) => val.completed === true).length;
      },
      total() {
        return this.tasks.length;
      },
      isEmpty(){
        return this.tasks.length === 0;
      }
    },
    methods: {
      ...mapActions(['addTask', 'deleteTask', 'changeTaskState']),

      addTaskMethod(){
        if(this.validData() === true){
          const task = {
            name: this.task,
            completed: false,
            date: this.date
          };

          this.addTask({task});
          this.task = '';
          this.date = '';
          this.wrong = false;

        } else {
          this.wrong = true;
          this.setMessageError();
        }
      },

      removeTask (item) {
        this.deleteTask({ task: item})
      },

      completeTask (item) {
        this.changeTaskState({ task: item})
      },
       tableRowColor({row, rowIndex}) {
                if (row.completed === true) {
                    return 'success-row';
                } else {

                    return 'warning-row'
                }
                return '';
            },
      validData () {
        if (this.task !== '' && this.date !=='') {
          return true;
        }else {
          return false;
        }
      },

      setMessageError() {
        if(this.task === '' && this.date === '') {
          this.errorMessage = ' The task and time is empty'
        } else {
          if(this.task = '') {
            this.errorMessage = 'Task is empty'
            } else {
          this.errorMessage = 'Time is empty'
          }
        }
      },
      getDate (item) {
        return moment(item).format('LTS');
      },
       isSetAlarm (){
        for(var i = 0; i< tasks.length(); i++){
          if(tasks.date[i] === moment().format('LTS')){
            return true;
        }
        }
      },
   
      
    created: function() {
		this.currentTime = setInterval(()=>{
			this.currentTime = moment().format('LTS')
		},60000)
	}

	}
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.taskmanager{
  background-attachment: scroll;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.current-t{
  background-color:#42b983;
  color: white;
  height: 50px;

}
span{
  margin-top: 25px;
}

.left-bar{
  width:100%;
}
.el-table .warning-row {
    background: rgb(238, 255, 0);
  }

.el-table .success-row {
    background: #42b983;
  }
</style>
