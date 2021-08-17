import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    const faTimesStyle = {color: 'red', cursor: 'pointer'}

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}<FaTimes onClick={() => onDelete(task.id)} style={faTimesStyle} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
