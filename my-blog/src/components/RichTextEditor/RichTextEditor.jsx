import { useState } from 'react';
import PropTypes from 'prop-types';
//import './RichTextEditor.css';
//import PostEditor from '../PostEditor/PostEditor';
function RichTextEditor({ value, onChange, error }) {
  const [selection, setSelection] = useState(null);
  const handleFormat = (format) => {
    if (!selection) return;  // We don't apply format if there's no selection
    const { start, end } = selection;
    const text = value;
    // Apply formatting around the selected text
    let newText;
    switch (format) {
      case 'bold':
        newText = `${text.slice(0, start)}**${text.slice(start, end)}**${text.slice(end)}`;
        break;
      case 'italic':
        newText = `${text.slice(0, start)}_${text.slice(start, end)}_${text.slice(end)}`;
        break;
      case 'heading':
        newText = `${text.slice(0, start)}### ${text.slice(start, end)}${text.slice(end)}`;
        break;
      default:
        return;
    }
    // Apply new text value
    onChange(newText);
    // Reset selection so we don't get stuck in an invalid state
    setSelection(null);
  };

  /*const onChange= (newText) =>{
    setSelection({
      start: e.target.selectionStart,
      end: e.target.selectionEnd
    });*/

    
  //};

  /*const handleChange = (e) => {
    handleFormat()*/
  //}

  const handleSelect = (e) => {
    // Capture selection start and end
    setSelection({
      start: e.target.selectionStart,
      end: e.target.selectionEnd
    });
  };
  return (
    <div className="rich-editor">
      <div className="rich-editor__toolbar">
        <button
          type="button"
          onClick={() => handleFormat('bold')}
          className="toolbar-button"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => handleFormat('italic')}
          className="toolbar-button"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => handleFormat('heading')}
          className="toolbar-button"
        >
          H
        </button>
      </div>
      <textarea
        className={`rich-editor__content ${error ? 'error' : ''}`}
        name='content'
        value={value}
        onChange={e => onChange(e.target.value)}
        onSelect={handleSelect}
        rows="10"
        
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
RichTextEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
export default RichTextEditor;