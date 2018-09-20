<?php

	header('Content-Type:application/json; charset=utf-8');

	// 实际场景可能会是从数据中取出的
	$detail = file_get_contents('./detail.json');

	// 将json解码成一个数组
	$detail = json_decode($detail, true);

	$type = $_GET['type'];
	$pid = $_GET['id'];

	// 返回json结果
	echo json_encode($detail[$type.$pid]);

?>