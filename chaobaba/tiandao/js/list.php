<?php

	header('Content-Type:application/json; charset=utf-8');

	// 实际场景可能会是从数据中取出的
	$region = file_get_contents('./listData.js');

	// 将json解码成一个数组
	$region = json_decode($region, true);

	$pid = $_GET['id'];
	
	// 返回json结果
	echo json_encode($region["listData0".$pid]);

?>