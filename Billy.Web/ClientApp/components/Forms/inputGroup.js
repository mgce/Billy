import formLabel from "./formLabel";

const InputGroup = props =>{
    const {labelName, name, link, onBlur} = props;
    return(
        <div className="form-group">
            <FormLabel {...labelName}/>
            <Input 
                name={name} 
                link={link} 
                onBlur={onBlur}/>
            <ErrorPlaceholder {...link.error}/>
        </div>
    )
}

