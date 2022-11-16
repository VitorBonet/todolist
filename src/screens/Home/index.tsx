import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import { Task } from '../../components/Task';
import { AntDesign } from '@expo/vector-icons'; 

import Logo from '../../assets/Logo.png';
import Clipboard from '../../assets/Clipboard.png';

import { styles } from './styles';

interface ITask {
  name: string;
  conclude: boolean;
}

export default function Home() {
  const [tasks, setTask] = useState<ITask[]>([]);
  const [tasksFiltered, setTaskFiltered] = useState<ITask[]>(tasks);
  const [inputTask, setInputTask] = useState("");

  const handleChangeFilterCreated = () => {
    setTaskFiltered(tasks.filter(task => !task.conclude));
  }

  const handleChangeFilterConcluded = () => {
    setTaskFiltered(tasks.filter(task => task.conclude));
  }
  
  const handleParticipantAdd = () => {
    if (!inputTask) return;

    const findTask = tasks.find(task => task.name === inputTask);

    if (findTask) {
      return Alert.alert("Tarefa Existe", "Essa tarefa já está na lista!")
    }  
    
    const newTask = { name: inputTask, conclude: false };
    setTask(prevState => [...prevState, newTask]);
    setTaskFiltered(prevState => [...prevState, newTask]);
    setInputTask('');
  }

  const handleTaskConclude = (name: string) => {
    const newTasks = [...tasks];
    
    const findIndexTask = newTasks.findIndex(task => task.name === name);
    if (findIndexTask > -1) {
      newTasks[findIndexTask].conclude = true;
      setTask(newTasks);
      Alert.alert("Bom trabalho!", "Tarefa concluída!")
    }
  }

  const handleTaskRemove = (name: string) => {
    Alert.alert("Remover", `Tem certeza que deseja remover?`, [
      { text: 'Sim', onPress: () => {
        const removedParticipants = tasks.filter(task => task.name !== name);
        setTask(removedParticipants);
        
        const removedParticipantsFiltered = tasksFiltered.filter(task => task.name !== name);
        setTaskFiltered(removedParticipantsFiltered);
        Alert.alert("Removido!");
       } 
      },
      {text: 'Não', style: 'cancel'}
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image 
          style={styles.logo}
          source={Logo} 
        />
      </View>

      <View style={styles.formView}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6b6b6b"
            value={inputTask}
            onChangeText={setInputTask}
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}><AntDesign name="pluscircleo" size={16} /></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filtersView}>
          <TouchableOpacity style={styles.buttonFilter} onPress={handleChangeFilterCreated}>
            <Text style={styles.buttonFilterTextBlue}>Criadas</Text>
            <View style={styles.buttonFilterCountView}>
              <Text style={styles.buttonFilterCount}>
                {tasks.filter(task => !task.conclude).length}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonFilter} onPress={handleChangeFilterConcluded}>
            <Text style={styles.buttonFilterTextPurple}>Concluídas</Text>
            <View style={styles.buttonFilterCountView}>
              <Text style={styles.buttonFilterCount}>                
              {tasks.filter(task => task.conclude).length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasksFiltered}
          keyExtractor={item => item.name}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyTextView}>
                <Image 
                  style={styles.clipboard}
                  source={Clipboard} 
                />
                <Text style={styles.listEmptyTextTitle}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.listEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <Task 
              key={item.name} 
              name={item.name} 
              concluded={item.conclude}
              onConclude={handleTaskConclude}
              onRemove={handleTaskRemove}
            />
          )}
        />
      </View>
    </View>
  );
}


