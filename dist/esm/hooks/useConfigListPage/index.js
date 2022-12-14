var _excluded = ["loading", "data", "lazyService"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { Form, message } from 'antd';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { ListTemplate } from "../../ListTemplate";
import { useRequest } from "../useRequest";
import { jsx as _jsx } from "react/jsx-runtime";
var PageInfoInit = {
  pageNo: 1,
  pageSize: 10
};
export var useConfigListPage = function useConfigListPage(_ref) {
  var headBar = _ref.headBar,
      colProps = _ref.colProps,
      rowProps = _ref.rowProps,
      spaceProps = _ref.spaceProps,
      tableProps = _ref.tableProps,
      defaulParams = _ref.defaulParams,
      actionColProps = _ref.actionColProps,
      tableCardProps = _ref.tableCardProps,
      _ref$formItemsConfig = _ref.formItemsConfig,
      formItemsConfig = _ref$formItemsConfig === void 0 ? [] : _ref$formItemsConfig,
      searchForm = _ref.searchForm,
      _onError = _ref.onError,
      _onSuccess = _ref.onSuccess,
      formaResult = _ref.formaResult,
      queryListService = _ref.queryListService,
      formatSubmitValue = _ref.formatSubmitValue;

  var _useState = useState(PageInfoInit),
      _useState2 = _slicedToArray(_useState, 2),
      pageInfo = _useState2[0],
      setPageInfo = _useState2[1];

  var _Form$useForm = Form.useForm(searchForm),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useRequest = useRequest(queryListService, {
    defaulParams: defaulParams,
    onSuccess: function onSuccess(value) {
      _onSuccess === null || _onSuccess === void 0 ? void 0 : _onSuccess(value);
    },
    onError: function onError(error) {
      if (_onError) {
        _onError(error);
      } else {
        message.error('请求列表数据出错');
      }
    },
    formaResult: formaResult
  }),
      loading = _useRequest.loading,
      data = _useRequest.data,
      queryList = _useRequest.lazyService,
      rest = _objectWithoutProperties(_useRequest, _excluded);

  var _ref2 = data || {},
      dataSource = _ref2.dataSource,
      total = _ref2.total;

  var list = dataSource && Array.isArray(dataSource) ? dataSource : [];

  var _ref3 = tableProps || {},
      pagination = _ref3.pagination;

  var queryListByFilter = function queryListByFilter(filterValues) {
    var values = formatSubmitValue ? formatSubmitValue(filterValues) : filterValues;
    queryList(values);
  };

  var currentPagination = _typeof(pagination) === 'object' ? _objectSpread(_objectSpread({
    pageSize: pageInfo.pageSize,
    current: pageInfo.pageNo
  }, pagination), {}, {
    total: total,
    onChange: function onChange(pageNo, pageSize) {
      var currentPageInfo = {
        pageSize: pageSize,
        pageNo: pageNo
      };
      setPageInfo(currentPageInfo);

      if (typeof pagination.onChange === 'function') {
        pagination === null || pagination === void 0 ? void 0 : pagination.onChange(pageNo, pageSize);
        var formValues = form.getFieldsValue();
        queryListByFilter(_objectSpread(_objectSpread({}, currentPageInfo), formValues));
      }
    }
  }) : pagination;
  var listContainer = useMemo(function () {
    return /*#__PURE__*/_jsx(ListTemplate, {
      headBar: headBar,
      tableProps: _objectSpread(_objectSpread({}, tableProps), {}, {
        loading: loading,
        dataSource: list,
        pagination: currentPagination
      }),
      tableCardProps: tableCardProps,
      spaceProps: spaceProps,
      searchBarProps: {
        form: form,
        colProps: colProps,
        rowProps: rowProps,
        actionColProps: actionColProps,
        formItemsConfig: formItemsConfig,
        onFinish: function onFinish(searchValue) {
          queryListByFilter(_objectSpread(_objectSpread({}, searchValue), PageInfoInit));
        },
        onReset: function onReset() {
          queryList(defaulParams);
        }
      }
    });
  }, [headBar, spaceProps, tableProps, tableCardProps, formItemsConfig]);
  return _objectSpread(_objectSpread({
    total: total,
    loading: loading,
    dataSource: list,
    queryList: queryList,
    pageInfo: pageInfo
  }, rest), {}, {
    listContainer: listContainer
  });
};