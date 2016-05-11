import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

export default class TextareaItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    prefixListCls: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['hasLine']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    rows: PropTypes.number,
    count: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    error: PropTypes.bool,
    autoHeight: PropTypes.bool,
    editable: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-textarea',
    prefixListCls: 'am-list',
    title: '',
    type: 'hasLine',
    autoHeight: false,
    editable: true,
    name: '',
    value: '',
    placeholder: '',
    clear: false,
    rows: 1,
    count: 0,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    error: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  componentDidMount = () => {
    if (this.props.autoHeight) {
      this.initialTextHeight = this.refs.textarea.offsetHeight;
      this.componentDidUpdate();
    }
  };
  componentDidUpdate = () => {
    if (this.props.autoHeight) {
      let textareaDom = this.refs.textarea;
      textareaDom.style.height = '';
      textareaDom.style.height = `${Math.max(this.initialTextHeight, textareaDom.scrollHeight)}px`;
    }
  };
  onChange = (e) => {
    let value = e.target.value;
    const { count, onChange } = this.props;
    if (count > 0) {
      value = value.substring(0, count);
    }
    onChange(value);
  };
  onBlur = (e) => {
    setTimeout(() => {
      this.setState({
        focus: false
      });
    }, 500);
    const value = e.target.value;
    this.props.onBlur(value);
  };
  onFocus = (e) => {
    this.setState({
      focus: true
    });
    const value = e.target.value;
    this.props.onFocus(value);
  };
  clearInput = () => {
    this.props.onChange('');
  };
  render() {
    let { prefixCls, prefixListCls, style, title, name, value, placeholder, clear, rows, count, editable, error, isLastItem, className } = this.props;
    const { focus } = this.state;
    const wrapCls = classNames({
      [`${prefixListCls}-item`]: true,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-last`]: isLastItem,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-focus`]: focus,
      [className]: className
    });

    return (
      <div className={wrapCls} style={style} onClick={this._handleClick}>
        {title ? (<div className={`${prefixCls}-label`}>{title}</div>) : null}
        <div className={`${prefixCls}-control`}>
          <textarea
            ref="textarea"
            name={name}
            rows={rows}
            placeholder={placeholder}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            value={value}
            readOnly={!editable}
          />
        </div>
        {clear && editable && value.length > 0 ?
          (<div className={`${prefixCls}-clear`} onClick={this.clearInput} onTouchStart={this.clearInput} />)
          : null}
        {count > 0 && rows > 1 ? (<span className={`${prefixCls}-count`}><span>{value.length}</span>/{count}</span>) : null}
      </div>
    );
  }
}
