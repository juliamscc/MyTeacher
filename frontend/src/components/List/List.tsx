import { Button } from "@mui/material";
import { Teacher } from "../../@types/Teacher";
import { FormatterService } from "../../services/FormatterService";
import { Description, EmptyList, Info, ItemList, ListStyled, Name, Photo, Value } from "./List.style";

interface ListProps {
    teachers: Teacher[],
    onSelect: (teacher: Teacher) => void
}

const List = (props: ListProps) => {

    return (
        <div>
            {props.teachers.length > 0 ? (
                <ListStyled>
                {props.teachers.map(teacher => (
                    <ItemList key={teacher.id}>
                    <Photo src={teacher.photo}></Photo>
                    <Info>
                        <Name>{teacher.name}</Name>
                        <Value>{FormatterService.monetaryValue(teacher.value)} por hora</Value>
                        <Description>{FormatterService.limitText(teacher.description, 200)}</Description>
                        <Button onClick = {() => props.onSelect(teacher)} sx={{width: '70%'}}>Marcar Aula com {teacher.name}</Button>
                    </Info>
                </ItemList>
                ))}
            </ListStyled>
            ) : (
                <EmptyList>Nenhum item encontrado</EmptyList>
            )}
        </div>
    )
}

export default List;