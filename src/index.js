import {http} from './http';
import './style.scss';

const example = () => {
  return 'Test'
} 

http.get('http://localhost:3000/posts').then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
});