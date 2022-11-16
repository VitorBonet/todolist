import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, AntDesign,  Entypo } from '@expo/vector-icons'; 
import { styles } from './styles';

interface ITaskProps {
  name: string;
  concluded: boolean;
  onConclude: (name: string) => void;
  onRemove: (name: string) => void;
}

export function Task({ name, concluded, onConclude, onRemove }: ITaskProps) {
  return (
    <View style={styles.container}>
      {concluded ? (
        <>
          <AntDesign name="checkcircleo" size={18} color="#5E60CE" />
          <Text style={styles.nameConcluded}>{name}</Text>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => onConclude(name)}>
            <Entypo name="circle" size={18} color="#4EA8DE" />
          </TouchableOpacity>
          <Text style={styles.name}>{name}</Text>
        </>
      )}      


      <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
        <FontAwesome name="trash" size={16} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}


