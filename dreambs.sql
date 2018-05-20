/*
Navicat MySQL Data Transfer

Source Server         : dreambs
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : dreambs

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-05-20 14:22:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `cainixihuan`
-- ----------------------------
DROP TABLE IF EXISTS `cainixihuan`;
CREATE TABLE `cainixihuan` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) DEFAULT NULL,
  `name` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `oldprice` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of cainixihuan
-- ----------------------------
INSERT INTO `cainixihuan` VALUES ('1', 'http://images.moonbasa.com/ProductImg/1/1801/large/465018103-009-01-L.jpg', '梦芭莎百搭显瘦装饰四合扣侧缝开叉设计...', '¥179', '¥219');
INSERT INTO `cainixihuan` VALUES ('2', 'http://images1.moonbasa.com/ProductImg/1/1801/large/462118101-075-01-L.jpg', '梦芭莎优雅人丝绉V字小立领落肩灯笼橡...', '¥169', null);
INSERT INTO `cainixihuan` VALUES ('3', 'http://images2.moonbasa.com/ProductImg/1/1801/large/467218104-D39-01-L.jpg', '梦芭莎优雅名媛收褶透视提花欧根纱伞半...', '¥199', null);
INSERT INTO `cainixihuan` VALUES ('4', 'http://images3.moonbasa.com/ProductImg/1/1801/large/031618106-803-01-L.jpg', '梦芭莎前短后长侧开叉绣花半开门襟衬衫', '¥199', '¥299');
INSERT INTO `cainixihuan` VALUES ('5', 'http://images4.moonbasa.com/ProductImg/1/1801/large/462218104-075-01-L.jpg', '梦芭莎时尚小圆领蝙蝠五分袖绣花绑带创...', '¥149', null);
INSERT INTO `cainixihuan` VALUES ('6', 'http://images5.moonbasa.com/ProductImg/1/1801/large/465018112-957-01-L.jpg', '梦芭莎时尚干练高腰九分裤', '¥199', null);
INSERT INTO `cainixihuan` VALUES ('7', 'http://images6.moonbasa.com/ProductImg/1/1801/large/031618104-M2K9-01-L.jpg', '梦芭莎条纹面料拼接八分袖衬衫', '¥219', null);

-- ----------------------------
-- Table structure for `details_mainl_bot`
-- ----------------------------
DROP TABLE IF EXISTS `details_mainl_bot`;
CREATE TABLE `details_mainl_bot` (
  `sid` tinyint(1) NOT NULL DEFAULT '0',
  `url` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of details_mainl_bot
-- ----------------------------
INSERT INTO `details_mainl_bot` VALUES ('1', 'http://images.moonbasa.com/ProductImg/1/1801/small/467218104-D39-01-S.jpg');
INSERT INTO `details_mainl_bot` VALUES ('2', 'http://images.moonbasa.com/ProductImg/1/1801/small/467218104-D39-02-S.jpg');
INSERT INTO `details_mainl_bot` VALUES ('3', 'http://images.moonbasa.com/ProductImg/1/1801/small/467218104-D39-03-S.jpg');
INSERT INTO `details_mainl_bot` VALUES ('4', 'http://images.moonbasa.com/ProductImg/1/1801/small/467218104-D39-04-S.jpg');
INSERT INTO `details_mainl_bot` VALUES ('5', 'http://images.moonbasa.com/ProductImg/1/1801/small/467218104-D39-05-S.jpg');
INSERT INTO `details_mainl_bot` VALUES ('6', 'http://images.moonbasa.com/ProductImg/1/1801/small/467218104-D39-06-S.jpg');
INSERT INTO `details_mainl_bot` VALUES ('7', 'http://images.moonbasa.com/ProductImg/1/1801/small/467218104-D39-07-S.jpg');
INSERT INTO `details_mainl_bot` VALUES ('8', 'http://images.moonbasa.com/ProductImg/1/1801/small/467218104-D39-08-S.jpg');

-- ----------------------------
-- Table structure for `details_right`
-- ----------------------------
DROP TABLE IF EXISTS `details_right`;
CREATE TABLE `details_right` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of details_right
-- ----------------------------
INSERT INTO `details_right` VALUES ('1', 'http://images5.moonbasa.com/ProductImg/1/1504/small/467115108-1005-01-S.jpg', '¥199');
INSERT INTO `details_right` VALUES ('2', 'http://images3.moonbasa.com/ProductImg/1/1501/small/467115113-010-01-S.jpg', '¥199');
INSERT INTO `details_right` VALUES ('3', 'http://images2.moonbasa.com/ProductImg/1/1501/small/467115124-009-01-S.jpg', '¥199');
INSERT INTO `details_right` VALUES ('4', 'http://images1.moonbasa.com/ProductImg/1/1501/small/467115131-009-01-S.jpg', '¥199');
INSERT INTO `details_right` VALUES ('5', 'http://images4.moonbasa.com/ProductImg/1/1501/small/467115143-010-01-S.jpg', '¥219');
INSERT INTO `details_right` VALUES ('6', 'http://images6.moonbasa.com/ProductImg/1/1501/small/037115119-P22-01-S.jpg', '¥179');
INSERT INTO `details_right` VALUES ('7', 'http://images3.moonbasa.com/ProductImg/1/1501/small/467115101-075-01-S.jpg', '¥179');
INSERT INTO `details_right` VALUES ('8', 'http://images.moonbasa.com/ProductImg/1/1501/small/467115125-1005-01-S.jpg', '¥179');
INSERT INTO `details_right` VALUES ('9', 'http://images3.moonbasa.com/ProductImg/1/1501/small/467115126-009-01-S.jpg', '¥179');
INSERT INTO `details_right` VALUES ('10', 'http://images7.moonbasa.com/ProductImg/1/1501/small/467115133-079-01-S.jpg', '¥179');
INSERT INTO `details_right` VALUES ('11', 'http://images7.moonbasa.com/ProductImg/1/1501/small/467115141-020-01-S.jpg', '¥179');
INSERT INTO `details_right` VALUES ('12', 'http://images5.moonbasa.com/ProductImg/1/1501/small/467215107-010-01-S.jpg', '¥179');

-- ----------------------------
-- Table structure for `index_banner`
-- ----------------------------
DROP TABLE IF EXISTS `index_banner`;
CREATE TABLE `index_banner` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of index_banner
-- ----------------------------
INSERT INTO `index_banner` VALUES ('1', 'http://i1.mbscss.com/img/moonbasa/2018/ydw/M5_9_100001.jpg');
INSERT INTO `index_banner` VALUES ('2', 'http://i6.mbscss.com/img/moonbasa/2018/zf/M5_8_91438.jpg');
INSERT INTO `index_banner` VALUES ('3', 'http://i3.mbscss.com/img/moonbasa/2018/zyc/M5_8_134329.jpg');
INSERT INTO `index_banner` VALUES ('4', 'http://i0.mbscss.com/img/moonbasa/2018/ydw/M5_8_90633.jpg');
INSERT INTO `index_banner` VALUES ('5', 'http://i5.mbscss.com/img/moonbasa/2017/ydw/M1_2_134759.jpg');
INSERT INTO `index_banner` VALUES ('6', 'http://i2.mbscss.com/img/moonbasa/2018/zf/M5_8_173504.jpg');
INSERT INTO `index_banner` VALUES ('7', 'http://i7.mbscss.com/img/moonbasa/2018/zf/M5_8_111703.jpg');
INSERT INTO `index_banner` VALUES ('8', 'http://i4.mbscss.com/img/moonbasa/2018/ydw/M4_23_221431.jpg ');
INSERT INTO `index_banner` VALUES ('9', 'http://i1.mbscss.com/img/moonbasa/2018/zf/M4_28_174520.jpg');

-- ----------------------------
-- Table structure for `registor`
-- ----------------------------
DROP TABLE IF EXISTS `registor`;
CREATE TABLE `registor` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of registor
-- ----------------------------
INSERT INTO `registor` VALUES ('4', '18267006852', '20cc88d2e204ffa768509d33fa882492');
INSERT INTO `registor` VALUES ('5', '18267006855', '20cc88d2e204ffa768509d33fa882492');
INSERT INTO `registor` VALUES ('6', '18267006853', '20cc88d2e204ffa768509d33fa882492');
INSERT INTO `registor` VALUES ('7', '1153648202@qq.com', '20cc88d2e204ffa768509d33fa882492');

-- ----------------------------
-- Table structure for `smallpic`
-- ----------------------------
DROP TABLE IF EXISTS `smallpic`;
CREATE TABLE `smallpic` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of smallpic
-- ----------------------------
INSERT INTO `smallpic` VALUES ('1', 'http://images.moonbasa.com/ProductImg/1/1801/huge/467218104-D39-01-H.jpg');
INSERT INTO `smallpic` VALUES ('2', 'http://images.moonbasa.com/ProductImg/1/1801/huge/467218104-D39-02-H.jpg');
INSERT INTO `smallpic` VALUES ('3', 'http://images.moonbasa.com/ProductImg/1/1801/huge/467218104-D39-03-H.jpg');
INSERT INTO `smallpic` VALUES ('4', 'http://images.moonbasa.com/ProductImg/1/1801/huge/467218104-D39-04-H.jpg');
INSERT INTO `smallpic` VALUES ('5', 'http://images.moonbasa.com/ProductImg/1/1801/huge/467218104-D39-05-H.jpg');
INSERT INTO `smallpic` VALUES ('6', 'http://images.moonbasa.com/ProductImg/1/1801/small/467218104-D39-06-S.jpg');
INSERT INTO `smallpic` VALUES ('7', 'http://images.moonbasa.com/ProductImg/1/1801/huge/467218104-D39-07-H.jpg');
INSERT INTO `smallpic` VALUES ('8', 'http://images.moonbasa.com/ProductImg/1/1801/huge/467218104-D39-08-H.jpg');

-- ----------------------------
-- Table structure for `subnav1`
-- ----------------------------
DROP TABLE IF EXISTS `subnav1`;
CREATE TABLE `subnav1` (
  `sid` tinyint(1) NOT NULL DEFAULT '0',
  `z1` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `z2` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `z3` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `z4` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `z5` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `z6` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of subnav1
-- ----------------------------
INSERT INTO `subnav1` VALUES ('1', '当季新品', 'ia连衣裙', 'T恤', '衬衫/小衫', '外套', '哈哈');
