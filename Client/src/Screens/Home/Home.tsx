import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, ScrollView } from "native-base";
import { User } from "@/Services";
import tw from "twrnc";

export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Home = (props: IHomeProps) => {
  const { data, isLoading } = props;
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <TextInput placeholder="NHAP VAO DIR" />
      <ScrollView horizontal>
        <Text>
          Nếu như các môn Toán, Lý, Hóa cần độ chính xác với những con số cụ thể
          thì với môn Văn, đó là những sự hiểu biết, trải nghiệm cùng với một
          chút quan điểm, cảm xúc của mỗi người khi viết từng câu chữ. Dù vậy,
          mỗi bài văn đúng quy chuẩn vẫn cần đảm bảo có 3 đoạn chính là mở bài,
          thân bài, kết luận và ai cũng nắm vững lý thuyết như vậy. Thế nhưng
          thực tế thì nhiều bài văn đã khiến mọi người phải cười đến chảy nước
          mắt. Mới đây, chị Trương An Xinh, sống tại Hà Nội, đã chia sẻ bài văn
          độc nhất vô nhị của con trai đang học lớp 9. Đề bài cô giáo đưa ra là:
          "Em hãy viết đoạn văn khoảng 2/3 trang giấy thi trình bày suy nghĩ của
          em về quyền học tập của trẻ em hiện nay". Và dưới đây là bài làm của
          con trai chị. Yêu cầu viết 1 đoạn văn mà nam sinh làm mở bài dài cả
          ngàn cây số, cô giáo phê ngay 2 từ lạc đề kèm lời nhắn đầu óc con nghĩ
          gì ấy - Ảnh 1. Bài văn của con trai chị Trương An Xinh. "Trái đất mất
          hàng tỉ năm để hình thành và cũng mất hàng triệu năm để sự sống được
          nhen nhóm và tồn tại. Nhưng trải qua hàng ngàn năm bồi đắp, sự sống ấy
          lại đang vô tình mất đi do chính những người đang mỉm cười vì sự sống
          đó. Đã đến lúc mà con người phải ý thức được sâu sắc vận mệnh và hành
          động của mình. Nhất là khi chúng ta còn đang sống trong thời đại của
          khoa học và kỹ thuật tiên tiến, càng phải ý thức hơn về việc đó. Trẻ
          em là người sẽ quyết định tương lai, vị thế của mỗi dân tộc trên
          trường quốc tế. Qua vấn đề bảo vệ, chăm sóc trẻ em, chúng ta có thể
          nhận ra được trình độ văn minh và phần nào bản chất của một xã hội".
          Đoạn văn trên sau đó đã được cô giáo cho 4 điểm kèm lời phê "lạc đề".
          Dân mạng thì ôm bụng cười vì đoạn mở bài quá bá đạo của nam sinh này.
          Trong khi cô giáo ra đề viết 1 đoạn văn nhưng con trai chị Xinh viết
          dài đến 6 dòng vẫn chưa hết đoạn mở bài. Đặc biệt, nhiều người đọc đi
          đọc lại vẫn không tìm ra mối liên quan giữa quyền học tập trẻ em với
          "trái đất được hình thành" và "sự sống được nhen nhóm". Tuy nhiên,
          cũng có người thừa nhận: "Cá nhân mình thấy bạn ấy viết được như thế
          chứng tỏ kiến thức không hề ít. Nếu có thời gian sẽ có 1 bài văn mang
          tầm vĩ mô. Mình sẽ lưu đoạn văn này cho con mình tham khảo". Yêu cầu
          viết 1 đoạn văn mà nam sinh làm mở bài dài cả ngàn cây số, cô giáo phê
          ngay 2 từ lạc đề kèm lời nhắn đầu óc con nghĩ gì ấy - Ảnh 2. Chị
          Trương An Xinh cho biết, đây là bài văn của Nhật Huy, tên ở nhà là
          Tom, con trai chị năm nay học lớp 9 trường Tiểu học - THCS Pascal. Chị
          Xinh vui vẻ chia sẻ: "Bài văn có 2, 3 câu và học sinh phải làm trong
          45 phút. Câu này con kể là vẫn còn đang dẫn dắt mở bài thì hết giờ
          mất. Thế là cô giáo phê lạc đề. Còn mình thì nhận lời nhắn của cô là:
          "Đầu óc Tom toàn nghĩ cái gì ấy chị ạ". Chị Xinh bày tỏ: "Hai đứa nhà
          mình có hơi ảnh hưởng gia đình là suy nghĩ thoáng và đầu óc phân tích
          tổng hợp. Xảy ra chuyện gì thì mình cũng nói chuyện với con theo hướng
          phân tích nguyên nhân kết quả nên con hay bị nghĩ nhiều thứ linh
          tinh". Mặc dù con bị điểm thấp, viết sai, chị Xinh không bênh con
          nhưng chị thấy đây cũng là tín hiệu mừng cho giáo dục vì đề bài các cô
          ra cũng cởi mở hơn xưa. Các con cũng không bị khuôn phép theo bài văn
          mẫu mà nghĩ gì viết nấy. Được biết, học lực của Tom xếp loại khá và
          môn yêu thích là môn Sinh học và môn tiếng Anh. Chia sẻ thêm về quan
          điểm dạy con, chị Xinh cho biết: "Vì năm nay Tom đã học lớp 9 nên
          trong cuộc sống hàng ngày mình thường xuyên nói chuyện để định hướng
          và phân tích công việc nghề nghiệp tương lai cho con. Mình để con lắng
          nghe, trao đổi và đưa ra ý kiến. Quyền quyết định cuối cùng là ở con
          nhưng trên con đường đi của con có dấu ấn của bố mẹ sẽ khá rõ nét. Vì
          suy nghĩ, cách sống của con sẽ do bố mẹ vừa đồng hành vừa làm gương".
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
