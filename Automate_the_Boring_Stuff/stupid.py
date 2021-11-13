import xlsxwriter

from moviepy.editor import VideoFileClip

noRepeatMP4 = [
    'https://www.truckerhuss.com/wp-content/uploads/1632/29/TRUCKER-HUSS-WEBINAR-Mitigating-Fiduciary-Risk_09_28_2021.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/TRUCKER%20HUSS%20WEBINAR_%20%20Emerging%20Theories%20of%20Liability%20in%20ERISA%20Litigation%20and%20Lessons%20Learned%20for%20Plan%20Fiduciaries.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/2021/03/TRUCKER-HUSS-WEBINAR_-Flexible-Spending-Accounts%E2%80%94IRS-Guidance-on-Permissive-Changes.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/TRUCKER%20HUSS%20WEBINAR_%20%20Consolidated%20Appropriations%20Act,%202021%20%E2%80%94%20Understanding%20the%20Health%20and%20Welfare%20and%20Retirement%20Provisions%20.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/TRUCKER%20HUSS%20WEBINAR_%20E-Disclosure%20%E2%80%93%20The%20DOL%20Regulations%20Are%20Finally%20Final!.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/TRUCKER%20HUSS%20WEBINAR_%20%20COVID-19%20Guidance%20for%20Health%20Plans_%20Putting%20It%20All%20Together!.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/ERISA%20and%20Tax%20Considerations%20for%20Severance%20Benefit%20Plans.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/COVID-19%20Impact%20on%20Employee%20Benefit%20Plans_2020.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/Litigation%20Lessons%20And%20Minimizing%20Risks.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/2020/01/SECURE-4.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/Multiple%20Employer%20Plans%20The%20Latest%20Word%20On%20Meps%20And%20Peps%2012%2012%202019.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/Erisa%20Claims%20Procedures%E2%80%94Mastering-The-Full-And-Fair-Review_11_2019a.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/ERISA_Litigation_Update_401k_and_403b_Excessive_Fee_Lawsuits_07_23_2019.mp4',
    'https://www.truckerhuss.com/wp-content/uploads/2019/01/Trucker-Huss-Webinar-01.11.2019-1.mp4']
noRepeatVideo = [
    'https://www.truckerhuss.com/wp-content/uploads/2019/04/TRUCKER-HUSS-WEBINAR_-The-New-and-Improved-Self-Correction-Alternatives-Under-EPCRS_05_23_2019.m4v',
    'https://www.truckerhuss.com/wp-content/uploads/2018/03/What-Employers-Need-to-Know-About-the-Tax-Cuts-and-Jobs-Act.mov',
    'https://www.truckerhuss.com/wp-content/uploads/2016/07/2016-07-27-09.00-Compensation-Planning-for-Non-Profits-and-Governmental-Entities%E2%80%94Newly-Issued-Code-Section-457f.wmv',
    'https://www.truckerhuss.com/wp-content/uploads/2016/05/2016-06-08-09.00-Compensation-Planning-for-Tax-Exempt-Entities_-Navigating-IRC-Section-457f.wmv',
    'https://www.truckerhuss.com/wp-content/uploads/2015/10/20150903THEDEADLINEFORFILINGFORMS1094CAND1095C.wmv',
    'https://www.truckerhuss.com/wp-content/uploads/2015/05/20150507WellnessProgramsOverview.wmv',
    'https://www.truckerhuss.com/wp-content/uploads/2015/06/20140403infoReportingIRC6055and6056.wmv',
    'https://www.truckerhuss.com/wp-content/uploads/2017/05/TruckerHuss-ACA-Repeal-Where-Things-Stand_05-24-2017-1.mov',
    'https://www.truckerhuss.com/wp-content/uploads/2016/12/2017-01-11-08.57-The-Future-of-ACA-Under-a-Trump-Presidency-and-GOP-Controlled-Congress.asf',
    'https://www.truckerhuss.com/wp-content/uploads/2015/12/2015-12-16-09.00-High-Deductible-Health-Plans-HDHPs-and-Health-Savings-Accounts-HSAs%E2%80%94How-Do-Those-Plans-Work_.wmv',
    'https://www.truckerhuss.com/wp-content/uploads/2015/06/20150304HEALTHCAREREPORTINGNewInstructionsIssued.wmv',
    'https://www.truckerhuss.com/wp-content/uploads/2015/06/20140304PayOrPlayFinalRegs.wmv']

videoInformation = []


def sendVideo(url):
    try:
        clip = VideoFileClip(url)
        videoURL = url
        videoDuration = clip.duration
        durationInMinutes = round(videoDuration/60)
        print(durationInMinutes)
        videoObj = {"Link to video": videoURL,
                    "Video Duration": durationInMinutes}
        videoInformation.append(videoObj)
        clip.close()
        print(videoInformation)
        return videoInformation
    except:
        print('An exception occurred')


def executeVideos():
    print('executing')
    for i in noRepeatVideo:
        sendVideo(i)
    for i in noRepeatMP4:
        sendVideo(i)


executeVideos()
print('done')
print(videoInformation)

headers = {'Link to video': 'Link to video',
           'Video Duration': 'Video Duration'}


def create_xlsx_file(file_path: str, headers: dict, items: list):
    with xlsxwriter.Workbook(file_path) as workbook:
        worksheet = workbook.add_worksheet()
        worksheet.write_row(row=0, col=0, data=headers.values())
        header_keys = list(headers.keys())
        for index, item in enumerate(items):
            row = map(lambda field_id: item.get(field_id, ''), header_keys)
            worksheet.write_row(row=index + 1, col=0, data=row)


create_xlsx_file("Video Analysis.xlsx", headers, videoInformation)
