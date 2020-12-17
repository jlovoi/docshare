import React from 'react';
import Input from '@material-ui/core/Input';

// import ArrowIcon from "@material-ui/icons/ArrowForward";
import CancelIcon from '@material-ui/icons/Cancel';
import FileIcon from '@material-ui/icons/Description';
// import UserIcon from "@material-ui/icons/AccountCircle";

export const onCancel = (files, setFiles) => name => {
	if (files.length === 1) {
		setFiles(null);
	} else {
		setFiles(files.filter(f => f.name !== name));
	}
};

export const nameDocument = (docName, setDocName, classes) => (
	<div className={classes.files}>
		<Input
			className={classes.input}
			value={docName}
			type="text"
			onChange={e => setDocName(e.target.value)}
		/>
	</div>
);

export const showFiles = (files, onCancel, classes) => {
	return (
		<div className={classes.files}>
			{files.map(f => (
				<div className={classes.fileContainer} key={`div-${f.name}`}>
					<div className={classes.flex}>
						<FileIcon className={classes.file} key={f.name} />
						<CancelIcon
							className={classes.cancel}
							onClick={() => onCancel(f.name)}
							key={`cancel-${f.name}`}
						/>
					</div>
					<div className={classes.fileName}>{f.name}</div>
				</div>
			))}
		</div>
	);
};

export const dropzone = (getRootProps, getInputProps, isDragActive) => (
	<div
		style={{
			height: '200px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '8px',
			border: '2px dashed black',
			margin: '0px 150px 0px 150px',
		}}
		{...getRootProps()}
	>
		<input {...getInputProps()} />
		{isDragActive ? (
			<p>Drop the files here ...</p>
		) : (
			<p>Drag-n-drop a file here, or click to select a file</p>
		)}
	</div>
);

export const onSubmit = (
	droppedFiles,
	docName,
	userId,
	selectedUsers,
	submitDoc,
) => () => {
	droppedFiles.forEach(file => {
		const reader = new FileReader();

		reader.onabort = (r, e) => console.error('Reader aborted!', e);
		reader.onerror = (r, e) => console.error('Reader error!', e);
		reader.onload = (r, e) => {
			const doc = {
				name: docName,
				users: selectedUsers,
				latestApproval: null,
				createdBy: userId,
				content: reader.result,
			};
			submitDoc(doc);
		};
		reader.readAsArrayBuffer(file);
	});
};

export const makeSetter = (sampleUsers, setSampleUsers, index) => newValue => {
	const copy = [...sampleUsers];
	copy.splice(index, 1, { ...sampleUsers[index], ...newValue });
	setSampleUsers(copy);
};
