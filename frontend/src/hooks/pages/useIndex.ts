import { useEffect, useState } from "react";
import { Teacher } from "../../@types/Teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [teachersList, setTeachersList] = useState<Teacher[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)
    const [message, setMessage] = useState('');

    useEffect(() => {
        ApiService.get('/professores').then((response) => {
            setTeachersList(response.data)
        })
    }, []);

    useEffect(() => {
        clearForm();
    }, [selectedTeacher]);

    function bookLesson() {
        if (selectedTeacher != null) {
            if (validateLessonData()) {
                ApiService.post(
                    '/professores/' + selectedTeacher.id + '/aulas', 
                    {name, email}).then(() => {
                        setSelectedTeacher(null);
                        setMessage('Cadastrado com sucesso!');
                    }).catch((error) => {
                        setMessage(error.response?.data.message);
                    });
            } else {
                setMessage('Preencha os dados corretamente.');
            }
        }
    }

    function validateLessonData() {
        return name.length > 0 && email.length > 0;
    }

    function clearForm() {
        setName('');
        setEmail('');
    }

    return {
        teachersList,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        bookLesson,
        message,
        setMessage
    }
}