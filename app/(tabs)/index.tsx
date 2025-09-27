// import { Text, View,StyleSheet, ScrollView, FlatList, SectionList } from 'react-native';


// export default function HomeScreen() {

//   const users=[
//     {id:1,name:"Nidal"},
//     {id:2,name:"Ali"},
//     {id:3,name:"Omar"},
//     {id:4,name:"Sara"},
//     {id:5,name:"Lina"},
//   ]
//   const education=[
//     {id:1,school:"Harvard"},
//     {id:2,school:"Yale"},
//     {id:3,school:"Princeton"},
//     {id:4,school:"Columbia"},
//     {id:5,school:"Stanford"},
//   ]
//   const list = [
//     {
//       title: "Section 1",
//       data: [
//         { id: 1, name: "nidal khan", qualification: "khan khan" },
//         { id: 2, name: "ali khan", qualification: "ali qualification" },
//         { id: 3, name: "omar khan", qualification: "omar qualification" }
//       ]
//     }
//   ];
//   return (
// <ScrollView style={{ flex: 1, backgroundColor: "#FFDAB9" }}>
//   <View style={styles.header}>
//       <Text style={styles.left}>☰</Text>
//       <Text style={styles.title}>My App</Text>
//       <Text style={styles.right}>🔔</Text>
//     </View>
//   <View style={styles.container}>
// <Text style={styles.text}>My Name is Muhammad Nidal</Text>
// {/* style sheet base style */}
// {/* <Text style={styles.text}>Hello World </Text> */}
// {/* Inline css */}
// {/* <Text style={{fontFamily:"san-serif",fontSize:28,color:"red"}}>Inline css</Text>  */}

//   {/* <View style={styles.container1}>
//       <Text style={styles.box1} />
//       <Text style={styles.text}>This is box 1</Text>
  
//       {/* <Text style={styles.box3} />this is box 3 */}
//       {/* <Text style={styles.text}>This is box 3</Text> */}
//       {/* --- IGNORE ---
//       <Text style={styles.box2} /> --- IGNORE ---
//       <Text style={styles.box3} /> --- IGNORE --- */}
//     </View> 
//   {/* </View> */}
//   {/* <View style={styles.boxes}>
//     <Text style={styles.box}>This is box 2</Text>
//     <Text style={styles.box}>This is box 2</Text>
//     <Text style={styles.box}>This is box 2</Text>
//   </View> */}
//   <View style={styles.boxes}>
//     <FlatList
//     data={users}
//     renderItem={({item})=><Text style={styles.text}>{item.name}</Text>}
//     keyExtractor={item=>item.id.toString()  }
//     />
    
//     <FlatList
//     data={education}
//     renderItem={({item})=><Text style={styles.text}>{item.school}</Text>}
//     keyExtractor={item=>item.id.toString()  }
//     />
//     <SectionList
//       sections={list}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <Text style={styles.text}>
//           {item.name} - {item.qualification}
//         </Text>
//       )}
//       renderSectionHeader={({ section: { title } }) => (
//         <Text style={[styles.text, { backgroundColor: "#b3e5fc" }]}>{title}</Text>
//       )}
//     />

  

//     </View>  
//   </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   boxes: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   header: {
//     flexDirection: "row",
//     marginTop: 60,
//     justifyContent: "space-between", // left, middle, right
//     alignItems: "center",
//     padding: 15,
//     backgroundColor: "lightblue",
//   },
//   left: { fontSize: 24 },
//   title: { fontSize: 20, fontWeight: "bold" },
//   right: { fontSize: 24 },
//   box:{
// width: 80,
// marginBottom: 20,
// height: 80,
// backgroundColor: 'yellow',
//   },
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#FFDAB9', // Light peach background
//       marginTop: 50,
//       color: 'blue',
//     },
//      container1: {
//     height: 100, // fixed height instead of flex: 1
//     flexDirection: "row", // row = horizontal, column = vertical
//     justifyContent: "space-around", // spacing
//     alignItems: "center", // align vertically
//     backgroundColor: "#eee",
//     marginVertical: 20,
//   },
//   box1: { width: 50, height: 50, backgroundColor: "red" },
//   box2: { width: 50, height: 50, backgroundColor: "green" },
//   box3: { width: 50, height: 50, backgroundColor: "blue" },
//     text: {
//       color:'blue',
//       fontSize: 20,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       margin: 10,
//       padding: 10,
//       borderWidth: 2,
//       borderColor: 'blue',
//       borderRadius: 10,
//       backgroundColor: '#E0F7FA',
//     }
//   });


// import { Text, View,StyleSheet, ScrollView, FlatList, SectionList } from 'react-native';

// export default function HomeScreen() {
//   const users=[
//     {id:1,name:"Nidal"},
//     {id:2,name:"Ali"},
//     {id:3,name:"Omar"},
//     {id:4,name:"Sara"},
//     {id:5,name:"Lina"},
//   ]
//   const education=[
//     {id:1,school:"Harvard"},
//     {id:2,school:"Yale"},
//     {id:3,school:"Princeton"},
//     {id:4,school:"Columbia"},
//     {id:5,school:"Stanford"},
//   ]
//   const list = [
//     {
//       title: "Section 1",
//       data: [
//         { id: 1, name: "nidal khanhhh", qualification: "khan khan" },
//         { id: 2, name: "ali khan", qualification: "ali qualification" },
//         { id: 3, name: "omar khaeen", qualification: "omar qualification" }
//       ]
//     }
//   ];

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "#FFDAB9" }}>
//       <View style={styles.header}>
//         <Text style={styles.left}>☰</Text>
//         <Text style={styles.title}>My App</Text>
//         <Text style={styles.right}>🔔</Text>
//       </View>
      
//       <View style={styles.container}>
//         <Text style={styles.text}>My Name is Muhammad Nidal</Text>
        
//         <View style={styles.boxes}>
//           <FlatList
//             data={users}
//             renderItem={({item})=><Text style={styles.text}>{item.name}</Text>}
//             keyExtractor={item=>item.id.toString()}
//             scrollEnabled={false}
//           />
          
//           <FlatList
//             data={education}
//             renderItem={({item})=><Text style={styles.text}>{item.school}</Text>}
//             keyExtractor={item=>item.id.toString()}
//             scrollEnabled={false}
//           />
          
//           <SectionList
//             sections={list}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <Text style={styles.text}>
//                 {item.name} - {item.qualification}
//               </Text>
//             )}
//             renderSectionHeader={({ section: { title } }) => (
//               <Text style={[styles.text, { backgroundColor: "#0cd813ff" }]}>{title}</Text>
//             )}
//             scrollEnabled={false}
//           />
//         </View>  
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     marginTop: 60,
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 15,
//     backgroundColor: "lightblue",
//   },
//   left: { fontSize: 24 },
//   title: { fontSize: 20, fontWeight: "bold" },
//   right: { fontSize: 24 },
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#FFDAB9',
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   boxes: {
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   text: {
//     color:'blue',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 10,
//     padding: 10,
//     borderWidth: 2,
//     borderColor: 'blue',
//     borderRadius: 10,
//     backgroundColor: '#E0F7FA',
//   }
// });

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

type Task = { id: string; text: string; completed: boolean };

export default function HomeScreen() {
  const [task, setTask] = useState("");            // Input state
  const [tasks, setTasks] = useState<Task[]>([]);  // Todo list state

  // ✅ Add Task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
    setTask(""); // Clear input
  };

  // ✅ Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // ✅ Toggle Complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // ✅ Render Each Task
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleComplete(item.id)} style={{ flex: 1 }}>
        <Text style={[styles.taskText, item.completed && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteText}>❌</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Input & Add Button */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter task..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addText}>➕</Text>
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor:"pink", marginTop: 40 },
  inputRow: { flexDirection: "row", marginBottom: 20 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#5c0303ff",
    padding: 10,
    width:30,
    borderRadius: 20,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  addText: { color: "white", fontSize: 20 },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  taskText: { fontSize: 18 },
  completed: { textDecorationLine: "line-through", color: "gray" },
  deleteText: { fontSize: 18, marginLeft: 10, color: "red" },
});
