import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from "@material-ui/core";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <TextField value={title}
                   error={!!error}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   label='Title'
                   helperText={error}
                   className={error ? "error" : ""}
        />
        <Button variant='contained' color='primary' onClick={addItem} size='small'>+</Button>

        {/*{error && <div className="error-message">{error}</div>}*/}
    </div>
}
