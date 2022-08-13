import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/slider/style";
import _Slider from "antd/es/slider";
import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
import "antd/es/time-picker/style";
import _TimePicker from "antd/es/time-picker";
import "antd/es/switch/style";
import _Switch from "antd/es/switch";
import "antd/es/radio/style";
import _Radio from "antd/es/radio";
import "antd/es/select/style";
import _Select from "antd/es/select";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import "antd/es/input/style";
import _Input from "antd/es/input";
var _excluded = ["key", "itemTitle", "itemColProps", "formItemProps"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export var RenderType = {
  // 对应 antd 的 Input 组件
  Input: 'Input',
  // 对应 antd 的 Select 组件
  Select: 'Select',
  // 对应 antd 的 InputNumber 组件
  InputNumber: 'InputNumber',
  // 对应 antd 的 Checkbox 组件
  Checkbox: 'Checkbox',
  // 对应 antd 的 Checkbox.Group 组件
  CheckboxGroup: 'CheckboxGroup',
  // 对应 antd 的 Radio 组件
  Radio: 'Radio',
  // 对应 antd 的 Radio.Group 组件
  RadioGroup: 'RadioGroup',
  // 对应 antd 的 Switch 组件
  Switch: 'Switch',
  // 对应 antd 的 TimePicker 组件
  TimePicker: 'TimePicker',
  // 对应 antd 的 TimePicker.RangePicker 组件
  TimeRangePicker: 'TimeRangePicker',
  // 对应 antd 的 DatePicker 组件
  DatePicker: 'DatePicker',
  // 对应 antd 的 DatePicker.RangePicker 组件
  DateRangePicker: 'DateRangePicker',
  // 对应 antd 的 Slider 组件
  Slider: 'Slider',
  // 自定以 Form.Item 的 children 渲染
  CustomItemChildren: 'CustomItemChildren'
};
export var renderFormItemChild = function renderFormItemChild(formItemConfig) {
  var renderType = formItemConfig.renderType,
      customItemChildren = formItemConfig.customItemChildren,
      _formItemConfig$formI = formItemConfig.formItemChildProps,
      formItemChildProps = _formItemConfig$formI === void 0 ? {} : _formItemConfig$formI;

  switch (renderType) {
    case RenderType.CustomItemChildren:
      {
        if (!customItemChildren) {
          throw new TypeError("renderType\u7B49\u4E8E".concat(RenderType.CustomItemChildren, "\u65F6,customItemChildren \u5FC5\u987B\u4E3A React.ReactElement \u7C7B\u578B"));
        }

        return customItemChildren;
      }

    case RenderType.Input:
      return /*#__PURE__*/_jsx(_Input, _objectSpread({}, formItemChildProps));

    case RenderType.InputNumber:
      return /*#__PURE__*/_jsx(_InputNumber, _objectSpread({}, formItemChildProps));

    case RenderType.Checkbox:
      return /*#__PURE__*/_jsx(_Checkbox, _objectSpread({}, formItemChildProps));

    case RenderType.CheckboxGroup:
      return /*#__PURE__*/_jsx(_Checkbox.Group, _objectSpread({}, formItemChildProps));

    case RenderType.Select:
      return /*#__PURE__*/_jsx(_Select, _objectSpread({}, formItemChildProps));

    case RenderType.Radio:
      return /*#__PURE__*/_jsx(_Radio, _objectSpread({}, formItemChildProps));

    case RenderType.RadioGroup:
      return /*#__PURE__*/_jsx(_Radio.Group, _objectSpread({}, formItemChildProps));

    case RenderType.Switch:
      return /*#__PURE__*/_jsx(_Switch, _objectSpread({}, formItemChildProps));

    case RenderType.TimePicker:
      return /*#__PURE__*/_jsx(_TimePicker, _objectSpread({}, formItemChildProps));

    case RenderType.TimeRangePicker:
      return /*#__PURE__*/_jsx(_TimePicker.RangePicker, _objectSpread({}, formItemChildProps));
      break;

    case RenderType.DatePicker:
      return /*#__PURE__*/_jsx(_DatePicker, _objectSpread({}, formItemChildProps));

    case RenderType.DateRangePicker:
      return /*#__PURE__*/_jsx(_DatePicker.RangePicker, _objectSpread({}, formItemChildProps));

    case RenderType.Slider:
      return /*#__PURE__*/_jsx(_Slider, _objectSpread({}, formItemChildProps));

    default:
      throw new TypeError('没有该渲染类型，请通过renderType为RenderType.CustomItemChildren来配置自定义渲染');
  }
};
export var FormItemsBuilder = function FormItemsBuilder(_ref) {
  var formItemsConfig = _ref.formItemsConfig,
      colProps = _ref.colProps;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: formItemsConfig === null || formItemsConfig === void 0 ? void 0 : formItemsConfig.map(function (_ref2, index) {
      var _formItemProps$name;

      var key = _ref2.key,
          itemTitle = _ref2.itemTitle,
          itemColProps = _ref2.itemColProps,
          formItemProps = _ref2.formItemProps,
          rest = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/_jsxs(_Col, _objectSpread(_objectSpread({}, itemColProps || colProps || {}), {}, {
        children: [itemTitle, /*#__PURE__*/_jsx(_Form.Item, _objectSpread(_objectSpread({}, formItemProps), {}, {
          children: renderFormItemChild(_objectSpread({}, rest))
        }))]
      }), key || (formItemProps === null || formItemProps === void 0 ? void 0 : (_formItemProps$name = formItemProps.name) === null || _formItemProps$name === void 0 ? void 0 : _formItemProps$name.toString()) || index);
    })
  });
};