<?php
function convertISO8601ToDate($iso8601)
{
    // ISO8601形式の文字列を日付に変換
    $date = new DateTime($iso8601);
    // 日付をyyyy年mm月dd日(曜日)の形式に変換
    $formattedDate = $date->format('Y年m月d日（D）');
    return $formattedDate;
}
